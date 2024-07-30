# LangLearnBot

Documentatie: https://lbiro-my.sharepoint.com/:w:/g/personal/tudose_matei_9h-21_lbiro_onmicrosoft_com/EcRpVVFVB8lLhgr0c40XhkABwNsc4jJnDjgLd82K1AGsnw?e=MZuY7L

LangLearnBot este o aplicație de desktop (Mac, Linux, Windows) ce își propune să îi ajute pe cei dornici să își exerseze folosirea limbilor străine într-un mod rapid și mult mai eficient. Cu ajutorul acestei aplicații, utilizatorii pot genera un număr nelimitat de teste de antrenament, de scris și citit.

![Screenshot from 2024-05-23 17-23-30](https://github.com/mateitudose/langlearnbot/assets/37705192/e6742a80-610d-4184-ac10-4b87cc933f0a)


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

![Screenshot from 2024-05-23 17-39-54](https://github.com/mateitudose/langlearnbot/assets/37705192/31b1e439-8200-48ee-8546-e998a7a1d1cb)


## Arhitectura aplicației

Aplicația este alcătuită din doua părți importante:
1.	Interfața grafică/frontend - scrisă în React cu componente NextUI stilizate manual cu Tailwind CSS
2.	Server-ul local/backend - un middleware care permite interacționarea indirectă cu Anthropic API fără a expune cheia de acces clientului/frontend-ului

Toate acestea sunt împachetate în executabilul aplicației care pe Linux măsoară undeva la 109MB. Consumul de RAM este de asemenea redus, server-ul local consumând aprox. 20MB.

![Screenshot from 2024-05-23 17-40-21](https://github.com/mateitudose/langlearnbot/assets/37705192/4bfec84c-3981-48a1-849d-455b464b692b)
