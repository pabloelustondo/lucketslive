import { LktLucket } from '../model/luckets'

export const LktTestLuckets: LktLucket[]  = [
    {
        "name": "Life",
        "picture": "assets/img/factoryLuckets/life-icon.png",
        "description": `This Lucket represents all your life. The status, sizes that you see are being calculated based on your luckets below. Use this lucket to have a general sense of you today. `,
        "dayAction": { description:`plan day, execute your best, close your day`},
        "weekAction": { description:`Calm down, review / asses main luckets`}
    },
    {
        "name": "A1-Mind",
        "picture": "assets/img/factoryLuckets/a1-mind.png",
        "description": `You mind is before anything, nothing should be done or plan
        until your mind is on a resonable level of functioning and control`,
        "comment":`any news / comments?`,
        "dayAction":{description:`Check active luckets`},
        "weekAction":{description:`Get all my luckets into luckets`}
    }
];
