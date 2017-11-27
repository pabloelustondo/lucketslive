import { LktLucket } from '../model/luckets'

export const LktTestLuckets: LktLucket[]  = [
    {
        "id": "life",
        "name": "Life",
        "status": "green",
        "picture": "assets/img/factoryLuckets/life-icon.png",
        "description": `This Lucket represents all your life. The status, sizes that you see are being calculated based on your luckets below. Use this lucket to have a general sense of you today. `,
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
        until your mind is on a resonable level of functioning and control`,
        "comment":`any news / comments?`,
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
