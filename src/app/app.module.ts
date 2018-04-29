import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CocktailsListComponent} from './cocktails-list/cocktails-list.component';
import {CocktailsDetailsComponent} from './cocktails-details/cocktails-details.component';
import {HeaderComponent} from './header/header.component';
import {TestComponent} from './test/test.component';
import {FruitsComponent} from './fruits/fruits.component';


//const appRoutes: Routes =       //{ path: '/fruits', component: FruitsComponent },
//
//    {path: '', component: AppComponent},
//    /*{
//      path: 'heroes',
//      component: HeroListComponent,
//      data: { title: 'Heroes List' }
//    },
//    { path: '',
//      redirectTo: '/heroes',
//      pathMatch: 'full'
//    },
//    { path: '**', component: PageNotFoundComponent }
//    */
//];

@NgModule({
    declarations: [
        AppComponent,
        CocktailsListComponent,
        CocktailsDetailsComponent,
        HeaderComponent,
        TestComponent,
        FruitsComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        //        RouterModule.forRoot(
        //            appRoutes,
        //            {enableTracing: true} // <-- debugging purposes only
        //        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
