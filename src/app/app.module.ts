// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StickyAreaComponent } from './sticky-area/sticky-area.component';
import { StickyComponent } from './sticky/sticky.component';
// Services
import { StickyService } from './services/sticky.service';
import { Sticky } from './models/sticky';

// Store
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
  {
    path: '',
    component: StickyAreaComponent
  },
  { path: ':id', component: StickyComponent }
];

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
    HttpClientModule,
    StoreModule.forRoot(reducers, { }),
    RouterModule.forRoot(routes),
    !environment.production ? StoreDevtoolsModule.instrument({ name: 'Sticky Dev Tools'}) : []
  ],
  providers: [ StickyService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
