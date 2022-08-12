import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { BodyComponent } from './componentes/body/body.component';
import { PantalladecargaComponent } from './componentes/pantalladecarga/pantalladecarga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactosComponent,
    BodyComponent,
    PantalladecargaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
