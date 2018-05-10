import {Component, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {Cocktail} from './cocktail';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    //encapsulation: ,
})
export class AppComponent {
    public prenom: string;
    public fruit: string;
    public fruits: string[] = [];
    @ViewChild('f') public el: ElementRef;

    public data: string = '';
    public display = true;
    title = 'app works';

    ngOnInit() {

        this.prenom = "Jean";
    }

    //title = 'app';
    cocktail = new Cocktail("poire", "test ", "https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg");

    deleteFruit(fruit: string) {
        this.fruits.splice(this.fruits.indexOf(fruit), 1)
    }

    addFruit() {
        //console.log(ref);
        //this.fruits.push(ref.value);
        this.fruits.push(this.el.nativeElement.value);
    }
}
