import { NgModule }         from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }            from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent }       from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroService }               from './services/hero/hero.service';

import { AppRoutingModule }  from './router/app-routing.modules';

@NgModule({
  imports:      [ BrowserModule,
                        FormsModule,
                        AppRoutingModule
  ],
  declarations: [ AppComponent,
                          HeroDetailComponent,
                          HeroesComponent,
                          DashboardComponent
  ],
  providers: [
                    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
