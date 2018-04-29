import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../cocktail';

@Component({
    selector: 'app-cocktails-details',
    templateUrl: './cocktails-details.component.html',
    styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
    public cocktail = new Cocktail(' TOTO ', ' DESC TOTO ', 'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg');
    constructor() {}

    ngOnInit() {}

}

