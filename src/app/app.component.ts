import {Component} from '@angular/core';
import {Cocktail} from './cocktail';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    cocktail = new Cocktail("poire", "ONE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTruvAroC9xezrdSrtjc5273uBabjbvNVLXmRLH_BSovdeyv1Ssekf8wLuX39HhwNgM30");
}
