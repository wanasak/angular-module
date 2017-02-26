import { Injectable } from '@angular/core';

export class Crisis {
    constructor(
        public id: number,
        public name: string
    ) { }
}

const CRISISES: Crisis[] = [
    new Crisis(1, 'Dragon'),
    new Crisis(2, 'Sky rains great whitesharks'),
    new Crisis(3, 'Giant Asteroid'),
];

const FETCH_LATENCY = 500;

@Injectable()
export class CrisisService {
    getCrisises() {
        return new Promise<Crisis[]>(resolve => {
            setTimeout(() => { resolve(CRISISES); }, FETCH_LATENCY);
        });
    }
    getCrisis(id: number | string) {
        return this.getCrisises()
            .then(crises => crises.find(crisis => crisis.id === id));
    }
}