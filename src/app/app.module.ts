import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
// import de NGRX
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './reducers'

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // count : es el estado global de la aplicacion
    StoreModule.forRoot({contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // es un numero para saber cuantos estados quieren mantener en sus herramientas
      logOnly: environment.production

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
