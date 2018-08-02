import {Injectable} from '@angular/core';
import {Cocktail} from '../models/cocktail.model';
import {BehaviorSubject} from 'rxjs';
import {Ingredient} from '../models/ingredient.model';

@Injectable()
export class CocktailService {

    public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
        new Cocktail('mojiitooo', 'DESC', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTruvAroC9xezrdSrtjc5273uBabjbvNVLXmRLH_BSovdeyv1Ssekf8wLuX39HhwNgM30',
            [
                new Ingredient('perrier', 1),
                new Ingredient('citron', 2),
                new Ingredient('sucre', 3),
            ]
        ),
        new Cocktail('mojiitooo one', ' DESC ONE', 'data:image/jpeg;base64,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',
            [
                new Ingredient('limonde', 1),
                new Ingredient('citron', 2),
                new Ingredient('sel', 3),
            ]
        ),
        new Cocktail('mojiitooo two', 'DESC TWO', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTruvAroC9xezrdSrtjc5273uBabjbvNVLXmRLH_BSovdeyv1Ssekf8wLuX39HhwNgM30',
            [
                new Ingredient('perrier', 1),
                new Ingredient('jus de fraise', 2),
            ]
        ),
    ]);

    public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

    constructor() {}

    selectCocktail(index: number): void {
        this.cocktail.next(this.cocktails.value[index]);
    }





}
