//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StickyAreaComponent } from './sticky-area/sticky-area.component';
import { StickyComponent } from './sticky/sticky.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StickyAreaComponent,
    StickyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
