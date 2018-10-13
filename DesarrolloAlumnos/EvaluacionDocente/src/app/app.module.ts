import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PrefichaComponent } from './preficha/preficha.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { AppRoutingModule } from './/app-routing.module';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: IntroduccionComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PrefichaComponent,
    IntroduccionComponent,
    EvaluacionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
