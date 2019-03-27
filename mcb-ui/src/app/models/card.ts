export class Card {
    name: string;
    image: string;
    attack: Type;
    atkType: string; //TODO REEVEER ESTO BRO
    def: Type;
    life: number;
    speed: number;
    passives: Passive[];
    level: number;
    tier: string;
}

export class Type {
    name: string;
    value: number;
}

export class Passive {
    name: string;
    values: number[];
}

export enum Tier {
    Common = 1, //Transparent
    Uncommon = 2, //Green
    Rare = 3, //Blue
    UltraRare = 4, //Purple
    Elite = 5, //Orange
    Legendary = 6, //Gold
    Epic = 7, //Platinum
    Boss = 9 //DarkRed
}