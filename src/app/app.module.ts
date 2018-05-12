import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CocktailsListComponent} from './cocktail-container/cocktails-list/cocktails-list.component';
import {CocktailsDetailsComponent} from './cocktail-container/cocktails-details/cocktails-details.component';
import {HeaderComponent} from './header/header.component';
import {CocktailContainerComponent} from './cocktail-container/cocktail-container.component';

import {ColorDirective} from './shared/directives/color.directive';

@NgModule({
    declarations: [
        AppComponent,
        CocktailsListComponent,
        CocktailsDetailsComponent,
        HeaderComponent,
        CocktailContainerComponent,
        ColorDirective
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
