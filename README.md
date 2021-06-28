# Meesterproef 2021

## Live
Op dit moment werkt de live-server nog niet en ik krijg hem ook niet aan de praat. Om de applicatie te draaien volg de stappen uit het kopje 'Installatie'
https://hipper-niels.herokuapp.com/

De applicatie is gemaakt voor Tablet gebruikers. 
### Op je desktop druk op F12 en vervolgens op iPad formaat, daarna op een knop op de navigatiebalk voor het juiste scherm.

---

<!-------------------------- New Paragraph -------------------------->

## Beschrijving
Hipper is een IOT-apparaat dat de gebruiker helpt bij revalidatie. Oorspronkelijk helpt het bij revalidatie na een heupfractuur, maar tegenwoordig wordt Hipper ook gebruikt voor andere revalidaties. Het apparaat wordt de PAM genoemd. De PAM meet de beweging van de gebruiker en stuurt deze gegevens via de server naar een dashboard. Het aantal oefeningen wordt gemeten in een zogenaamde PAM-score. De revalidant kan deze gegevens vervolgens met zijn therapeut analyseren en doelen stellen.

---

<!-------------------------- New Paragraph -------------------------->

## Opdracht
Momenteel hebben revalidatiepatiënten moeite met het interpreteren van de informatie en uit onderzoek blijkt dat dit komt door de manier waarop gegevens worden weergegeven.

---

<!-------------------------- New Paragraph -------------------------->

## Concept
Het nieuwe ontwerp is een dashboard waarin gebruikers hun data kunnen zien. Daarnaast dagelijks activiteiten kunnen selecteren die zij gedaan hebben om deze vervolgens te bekijken in het logboek. Hierin worden alle activiteiten op datum opgeslagen zodat de revalidant en therapeut kunnen zien welke activiteiten er dagelijks gedaan zijn.

---

<!-------------------------- New Paragraph -------------------------->

## Features
### Dashboard
Op het dashboard staan alle dagelijkse scores van de revalidant en is de home pagina van de applicatie. Het rondje geeft aan hoe ver de revalidant zijn of haar doel bereikt heeft. In de grafiek staat de dagelijkse PAM-score aangegeven met een lijn.

![image](https://user-images.githubusercontent.com/78353674/123434587-f4151880-d5cc-11eb-801b-a4d69deb6797.png)

---

<!-------------------------- New Paragraph -------------------------->

### Doelen instellen
De therapeut kan samen met de revalidant een doel instellen waar de revalidant zich 1 week mee bezig gaat houden.

![image](https://user-images.githubusercontent.com/78353674/123434650-01320780-d5cd-11eb-820b-e57192921f43.png)

---

<!-------------------------- New Paragraph -------------------------->

### Activiteiten
Op de pagina activiteiten staan afbeelingen die horen bij een bepaalde activiteit. Dit moet de gebruiker motiveren om lekker te gaan bewegen en vervolgens op deze activiteit te drukken.

![image](https://user-images.githubusercontent.com/78353674/123434711-0f802380-d5cd-11eb-985f-a49c9009a354.png)

---

<!-------------------------- New Paragraph -------------------------->

### Activiteiten toevoegen
Aan het eind van de dag kan de revalidant hier zelf zijn of haar activiteiten invoeren die vervolgens aan het logboek worden toegevoegd.

![image](https://user-images.githubusercontent.com/78353674/123434774-20309980-d5cd-11eb-82a9-3e58834549c6.png)

---

<!-------------------------- New Paragraph -------------------------->

### Logboek
Het logboek geeft aan welke activiteiten de revalidant vandaag heeft voltooid. Daarnaast kun je op de kalender op een datum drukken en de daarbijhorende activiteiten van die dag zien.

![image](https://user-images.githubusercontent.com/78353674/123434814-2aeb2e80-d5cd-11eb-89cf-b52bef0a0fed.png)

---

<!-------------------------- New Paragraph -------------------------->

## Installatie
1. Clone this repo  
    ```bash
    git clone https://github.com/NielsPeeters96/meesterproef-Niels.git
    ```   
    
2. Download Node 
    ```bash
    Node https://nodejs.org/en/
    ``` 

3. install packages  
    ```bash
    npm install
    ```
    
4. install MongoDB  
    ```bash
    npm install mongodb --save
    ```
    
5. start applicatie  
    ```bash
    node server.js
    ```
---

<!-------------------------- New Paragraph -------------------------->

## Data & API
Nathan Neelis heeft een GIST aangemaakt op GitHub met daarin dezelfde code als de data die je krijgt van Hipper. Door zijn getData en javascript code heb ik deze data kunnen fetchen en kan ik deze vervolgens laten zien op de pagina en naar mijn concept stijlen.

### PAM daily values
In de daily values is de data samengevat per dag.
In deze data is af te lezen hoeveel minuten de gebruiker heeft bewogen en met welke intensiteit.
In het voorbeeld is te zien dat deze gebruiker 59 minuten aan lichte activiteiten heeft gedaan.
Daarnaast heeft hij nog 8 minuten aan medium activiteiten gedaan en geen zware activiteiten.
De score die hij deze dag voor zijn activiteiten heeft gekregen is een 8.50.

### PAM epoch values (raw data)
Deze data is de ruwe data van het apparaat.
Het apparaat stuurt welke 15 minuten een update van de activiteiten.
In de score zie je een string van 192 karakters waarvan elke 2 karakters 15 minuten zijn.
De score van deze twee karakters geeft de beweging aan.

![image](https://user-images.githubusercontent.com/55492381/118803983-5f6c1c00-b8a4-11eb-9f0d-2c60b0449d88.jpg)

---

<!-------------------------- New Paragraph -------------------------->

## Planning
- [x] Setup Project
- [x] Build interface
- [x] Design for Tablet users
- [x] Fetch data
- [x] Visualize data with charts and circles
- [x] Display activities
- [x] Make different charts
- [x] Choose your weekly activities and goals
- [x] Profile page
- [x] Use D3 to make charts
- [x] Save activities
- [x] Load daily activities at planning page
- [x] Using MongooseDB with activities
- [ ] Load activities from other dates
- [ ] Register User
- [ ] Login User
- [ ] Link goals to dashboard circle
- [ ] Link your goals to the graph
- [ ] Show your daily goal in your journal
- [ ] Save daily scores in database
- [ ] Save goals in database
- [ ] Make circle animation on dashboard dynamic based on target
- [ ] Add manifest
- [ ] Add serviceworker
- [ ] Cache pages
- [ ] Responsive for desktop and mobile

---

<!-------------------------- New Paragraph -------------------------->

## Bronnen
- https://github.com/NathanNeelis/meesterproef-2021
- https://stackoverflow.com/questions/43842793/basic-authentication-with-fetch
- https://www.youtube.com/watch?v=baorOUVPF-I
- https://www.youtube.com/watch?v=_SubPYPtJO4
- https://css-tricks.com/using-conic-gradients-css-variables-create-doughnut-chart-output-range-input/
- https://www.youtube.com/watch?v=BDpBAFvdjYo&ab_channel=LoharTalkLoharTalk 
- https://www.youtube.com/watch?v=C4t6qfHZ6Tw&t=1393s&ab_channel=freeCodeCamp.orgfreeCodeCamp.org
- https://www.youtube.com/watch?v=Ft73g5Kyknw&t=54s&ab_channel=freeCodeCamp.orgfreeCodeCamp.orgGeverifieerd
- https://zellwk.com/blog/local-mongodb/
- https://jimmydekroon.medium.com/my-first-experience-with-databases-bf58bf2fb014
- https://docs.mongodb.com/drivers/node/quick-start/
- https://account.mongodb.com/account/login?n=%2Fv2%2F60d1e5f618829440199f1b73%23metrics%2FreplicaSet%2F60d1e9d86003862127003472%2Fexplorer%2Flogboek-activiteiten%2Fdatums%2Ffind
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://zellwk.com/blog/crud-express-mongodb/
- https://web.dev/at-property/
- https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty
- https://usefulangle.com/post/187/nodejs-get-date-time


### Presentatie
https://presentatie-hipper.netlify.app/

---

<!-------------------------- New Paragraph -------------------------->

## Licentie
Niels Peeters Hogeschool van Amsterdam, Web Design & Development 2021
