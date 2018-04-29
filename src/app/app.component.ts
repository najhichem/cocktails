import {Component} from '@angular/core';
import {Cocktail} from './cocktail';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public prenom: string;
    public fruit: string;
    public fruits: string[] = [];


    ngOnInit() {

        this.prenom = "Jean";
    }

    title = 'app';
    cocktail = new Cocktail("poire", "test ", "https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg");

    deleteFruit(fruit: string) {
        this.fruits.splice(this.fruits.indexOf(fruit), 1)
    }
}
