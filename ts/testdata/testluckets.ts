import { LktLucket } from '../model/luckets'

export const LktTestLuckets: LktLucket[]  = [
    {
        "id": "life",
        "name": "Life",
        "status": "green",
        "picture": "assets/img/factoryLuckets/life-icon.png",
        "description": `This Lucket represents all your life. The status in this luckets are being calculated based on all your luckets below. Use this lucket to have a general sense of your life as a whole. `,
        "dayAction": { name:"name", description:`live your day to the fullest`, points:1, status: "red"},
        "weekAction": { name:"name",description:`live your day to the fullest`, points:1, status: "yellow"},
        "monthAction": { name:"name",description:`live your day to the fullest`, points:1, status: "red"},
        "seasonAction": {name:"name", description:`live your day to the fullest`, points:1, status: "green"},
        "yearAction": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
        "year5Action": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
    },
    {
        "id":"a1-mind",
        "name": "A1-Mind",
        "status": "green",
        "picture": "assets/img/factoryLuckets/a1-mind.png",
        "description": `You mind is before anything, nothing should be done or plan
        until your mind is on a resonable level of functioning and control. Make sure you invest at least half an hour just letting your mind check the plan for the day, the status of important things before starting your day.`,
        "dayAction":{name:"name",description:`Check active luckets`,
            points:1,
            status: "yellow"},
        "weekAction":{name:"name",description:`Get all my luckets into luckets`, points:7, status: "green"},
        "monthAction": { name:"name",description:`live your day to the fullest`, points:1, status: "white"},
        "seasonAction": { name:"name",description:`live your day to the fullest`, points:1, status: "yellow"},
        "yearAction": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
        "year5Action": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
    },
    {
        "id":"a2-body",
        "name": "A2-Body",
        "status": "green",
        "picture": "assets/img/factoryLuckets/a2-body.png",
        "description": `Second to your mind, is your body, nothing should be done or plan
        until your body is on a resonable level of functioning and control. Listen to your body.`,
        "dayAction":{name:"name",description:`Check active luckets`,
            points:1,
            status: "yellow"},
        "weekAction":{name:"name",description:`Get all my luckets into luckets`, points:7, status: "green"},
        "monthAction": { name:"name",description:`live your day to the fullest`, points:1, status: "white"},
        "seasonAction": { name:"name",description:`live your day to the fullest`, points:1, status: "yellow"},
        "yearAction": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
        "year5Action": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
    },
    {
        "id":"a3-we",
        "name": "A3-We",
        "status": "green",
        "picture": "assets/img/factoryLuckets/a3-we.png",
        "description": `Humans can live in isolation for a while but this is not natural, healthy nor desirable. A balanced and meaninful life is 
        specially connected to some very special people. `,
        "dayAction":{name:"name",description:`Check active luckets`,
            points:1,
            status: "yellow"},
        "weekAction":{name:"name",description:`Get all my luckets into luckets`, points:7, status: "green"},
        "monthAction": { name:"name",description:`live your day to the fullest`, points:1, status: "white"},
        "seasonAction": { name:"name",description:`live your day to the fullest`, points:1, status: "yellow"},
        "yearAction": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
        "year5Action": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
    },
    {
        "id":"a4-look",
        "name": "A3-We",
        "status": "green",
        "picture": "assets/img/factoryLuckets/a3-we.png",
        "description": ``,
        "dayAction":{name:"name",description:`Check active luckets`,
            points:1,
            status: "yellow"},
        "weekAction":{name:"name",description:`Get all my luckets into luckets`, points:7, status: "green"},
        "monthAction": { name:"name",description:`live your day to the fullest`, points:1, status: "white"},
        "seasonAction": { name:"name",description:`live your day to the fullest`, points:1, status: "yellow"},
        "yearAction": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
        "year5Action": { name:"name",description:`live your day to the fullest`, points:1, status: "green"},
    }
];
