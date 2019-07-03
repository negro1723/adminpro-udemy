import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos.
import { SharedModule } from './shared/shared.module';
//Rutas.
import { AppRoutingModule } from './app-routing.module';
//componentes.
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
