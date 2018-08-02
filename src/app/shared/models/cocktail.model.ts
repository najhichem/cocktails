

import {Ingredient} from './ingredient.model';
export class Cocktail {


    constructor(
        public name: string,
        public desc: string,
        public img: string,
        public ingredients: Ingredient[]
    ) {
    }

}