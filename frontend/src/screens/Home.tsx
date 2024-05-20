import { useState } from 'react';
import {Card, Spacer} from "@nextui-org/react";
import LevelSelector from "../components/LevelSelector.tsx";
import {useLocation} from "wouter";

export default function Home() {
    const [_, setLocation] = useLocation();
    const [selectedLevel, setSelectedLevel] = useState("");

    const handleLevelSelect = (level: string) => {
        setSelectedLevel(level);
    };

    return (
        <div className="flex flex-col px-3 h-screen bg-neutral-200">
            <div className="flex flex-col justify-center items-center bg-gray-100 h-screen rounded-xl mt-4 mb-4 p-4">
                <h1 className="text-2xl font-bold">LangLearnBot</h1>
                <p className="text-lg">The smart way to practice your language skills!</p>
                <Spacer y={6}/>
                <p>Choose the desired CEFR language level</p>
                <Spacer y={2}/>
                <LevelSelector onLevelSelect={handleLevelSelect}/>
                <Spacer y={12}/>
                <div className={"flex flex-row justify-center gap-2"}>
                    <Card isPressable={true} onPress={() => setLocation(`/reading/${selectedLevel}`)} className={"w-36 p-4 items-center justify-center"}>
                        <p>Reading</p>
                        <Spacer y={1}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                        </svg>
                    </Card>
                    {/* TODO: Writing task not yet ready to release */}
                    <Card isPressable={true} onPress={() => setLocation(`/writing/${selectedLevel}`)} className={"w-36 p-4 items-center justify-center"}>
                        <p>Writing</p>
                        <Spacer y={1}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                        </svg>
                    </Card>
                </div>
            </div>
        </div>
    );
}
