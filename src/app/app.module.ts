import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import { CardsComponent } from './cards/cards.component';
import {HttpClientModule} from "@angular/common/http";
import { EditionComponent } from './edition/edition/edition.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    CardsComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component: TimelinesComponent},
      {path:'cards',component: CardsComponent},
      {path:'edit/:ID', component:EditionComponent}
    ])
  ],


  providers: [ HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
