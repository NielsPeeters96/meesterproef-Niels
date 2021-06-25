# Meesterproef 2021

## Live
https://hipper-niels.herokuapp.com/

De applicatie is gemaakt voor Tablet gebruikers

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

---

<!-------------------------- New Paragraph -------------------------->

## Features
### Dashboard

---

<!-------------------------- New Paragraph -------------------------->

### Doelen instellen


---

<!-------------------------- New Paragraph -------------------------->

### Activiteiten


---

<!-------------------------- New Paragraph -------------------------->

### Activiteiten toevoegen


---

<!-------------------------- New Paragraph -------------------------->

### Logboek


---

<!-------------------------- New Paragraph -------------------------->

## Installatie
1. Clone this repo  
    ```bash
    git clone https://github.com/NielsPeeters96/meesterproef-Niels.git
    ```   

2. install packages  
    ```bash
    npm install
    ```
    
3. install MongoDB  
    ```bash
    npm install mongodb --save
    ```
    
4. install Mongoose  
    ```bash
    npm install mongoose
    ```
    
4. start applicatie  
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
- [x] Responsive
- [x] Fetch data
- [x] Visualize data with charts and circles
- [x] Display activities
- [x] Make different charts
- [x] Choose your weekly activities and goals
- [x] Profile page
- [x] Use D3 to make charts
- [ ] Save activities
- [ ] Load daily activities at planning page
- [ ] Using MongooseDB with activities
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

---

<!-------------------------- New Paragraph -------------------------->

## Licentie
Niels Peeters Hogeschool van Amsterdam, Web Design & Development 2021
