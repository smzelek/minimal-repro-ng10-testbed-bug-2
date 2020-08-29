import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1 } from './component1/component1.component';
import { DependencyComponent } from './dependency-component/dependency.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    DependencyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
