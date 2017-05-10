import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { AppComponent }  from './app.component';
import { ColorPreviewer} from './components/colorPreviewer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ColorPreviewer ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
