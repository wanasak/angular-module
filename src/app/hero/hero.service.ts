import { Injectable } from '@angular/core';

export class Hero {
    constructor(
        public id: number,
        public name: string
    ) { }
}

const HEROES: Hero[] = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombaso'),
    new Hero(14, 'Mageta'),
    new Hero(15, 'Rubberman'),
    new Hero(16, 'Pikachu')
];

const FETCH_LATENCY = 500;

@Injectable()
export class HeroService {
    getHeroes() {
        return new Promise<Hero[]>(resolve => {
            setTimeout(() => { resolve(HEROES); }, FETCH_LATENCY);
        });
    }
    getHero(id: number | string) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}