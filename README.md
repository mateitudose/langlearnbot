# LangLearnBot
LangLearnBot este o aplicație de desktop (Mac, Linux, Windows) ce își propune să îi ajute pe cei dornici să își exerseze folosirea limbilor străine într-un mod rapid și mult mai eficient. Cu ajutorul acestei aplicații, utilizatorii pot genera un număr nelimitat de teste de antrenament, de scris și citit.


## Tehnologii folosite

Aplicația este construită cu cele mai noi tehnologii, este compatibilă cu toate sistemele de operare (Mac, Linux, Windows), putând însă să fie rulată chiar și pe Web. Consumă puține resurse, deoarece generările de teste se fac în cloud.
Lista tehnologiilor utilizate:
1.	Tauri – framework pentru aplicații desktop
2.	React – framework pentru construirea de aplicații web
3.	Typescript
4.	NextUI - librărie componente UI
5.	Tailwind CSS – framework CSS pentru stilizarea componentelor
6.	Bun.sh - runtime pentru Javascript
7.	Anthropic – API pentru modelul de AI
8.	Git & Github - sistem de gestionare al codului, bug tracking


## Arhitectura aplicației

Aplicația este alcătuită din doua părți importante:
1.	Interfața grafică/frontend - scrisă în React cu componente NextUI stilizate manual cu Tailwind CSS
2.	Server-ul local/backend - un middleware care permite interacționarea indirectă cu Anthropic API fără a expune cheia de acces clientului/frontend-ului

Toate acestea sunt împachetate în executabilul aplicației care pe Linux măsoară undeva la 109MB. Consumul de RAM este de asemenea redus, server-ul local consumând aprox. 20MB.
