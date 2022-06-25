import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
