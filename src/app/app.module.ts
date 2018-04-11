//Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StickyAreaComponent } from './sticky-area/sticky-area.component';
import { StickyComponent } from './sticky/sticky.component';
//Services
import { StickyService } from './services/sticky.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StickyAreaComponent,
    StickyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ StickyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
