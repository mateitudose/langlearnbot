#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri_plugin_shell::ShellExt;
use tauri_plugin_shell::process::CommandEvent;
use tauri::AppHandle;
use tauri::Emitter;

#[tauri::command]
fn start_backend(app: AppHandle) {
   println!("Starting backend...");
   let sidecar_command = app.shell().sidecar("langlearnbot-backend").unwrap();
   let (mut rx, mut child) = sidecar_command
     .spawn()
     .expect("Failed to spawn sidecar");
   println!("Backend started");

   tauri::async_runtime::spawn(async move {
     // read events such as stdout
     while let Some(event) = rx.recv().await {
       if let CommandEvent::Stdout(line) = event {
         let message = String::from_utf8(line).expect("Found invalid UTF-8");
         app.emit("message", Some(format!("'{}'", message)))
           .expect("failed to emit event");
         // write to stdin
         child.write("message from Rust\n".as_bytes()).unwrap();
       }
     }
   });
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![start_backend])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
