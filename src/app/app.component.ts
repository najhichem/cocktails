import {Component, OnInit} from '@angular/core';
import {Cocktail} from './shared/models/cocktail.model';
import {Observable, Observer, Subscription} from 'rxjs';
import {Ingredient} from './shared/models/ingredient.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    cocktail = new Cocktail("poire", "ONE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTruvAroC9xezrdSrtjc5273uBabjbvNVLXmRLH_BSovdeyv1Ssekf8wLuX39HhwNgM30",
        [
            new Ingredient('limonde', 1),
            new Ingredient('citron', 2),
            new Ingredient('sel', 3),
        ]);

    ngOnInit() {
        const obs = Observable.create((observer: Observer<any>) => {
            observer.next(1);
            observer.next(2);
            setTimeout(function () {
                observer.next(42);
            }, 2000)
        })


        const sub: Subscription = obs.subscribe({
            next: x => console.log(x),
            complete: () => console.log('complete'),
            error: x => console.log('Erreur x !! ')
        })
    }




}
