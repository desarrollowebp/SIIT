import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { DatosEscolaresComponent } from './datos-escolares/datos-escolares.component';
import { VerificacionBecaComponent } from './verificacion-beca/verificacion-beca.component';
import { KardexCalificacionesComponent } from './kardex-calificaciones/kardex-calificaciones.component';
import { HorarioComponent } from './horario/horario.component';
import { CalificacionesExamenesComponent } from './calificaciones-examenes/calificaciones-examenes.component';
import { CalificacionesParcialesComponent } from './calificaciones-parciales/calificaciones-parciales.component';
import { ResidenciasComponent } from './residencias/residencias.component';
import { TutoriasComponent } from './tutorias/tutorias.component';
import { SeleccionMateriasComponent } from './seleccion-materias/seleccion-materias.component';
import { PrefichaPagoComponent } from './preficha-pago/preficha-pago.component';
import { HorarioReinscripcionComponent } from './horario-reinscripcion/horario-reinscripcion.component';
import { GruposCargadosComponent } from './grupos-cargados/grupos-cargados.component';
import { ExtraescolarComponent } from './extraescolar/extraescolar.component';
import { EvaluacionDocenteComponent } from './evaluacion-docente/evaluacion-docente.component';
import { AuditoriaServicioComponent } from './auditoria-servicio/auditoria-servicio.component';
import { ListaModulosComponent } from './lista-modulos/lista-modulos.component';
import { MenuHComponent } from './menu-h/menu-h.component';
import { DatosAlumnoComponent } from './datos-alumno/datos-alumno.component';
import { HorarioHorarioComponent } from './horario-horario/horario-horario.component';

const routes:Routes = [
  { path: '', component: ListaModulosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'datosEscolares', component: DatosEscolaresComponent },
  { path: 'verificacionBeca', component: VerificacionBecaComponent },
  { path: 'kardexCalificaciones', component: KardexCalificacionesComponent },
  { path: 'horario', component: HorarioComponent },
  { path: 'calificacionesExamenes', component: CalificacionesExamenesComponent },
  { path: 'calificacionesParciales', component: CalificacionesParcialesComponent },
  { path: 'residencias', component: ResidenciasComponent },
  { path: 'tutorias', component: TutoriasComponent },
  { path: 'seleccionMaterias', component: SeleccionMateriasComponent },
  { path: 'prefichaPago', component: PrefichaPagoComponent },
  { path: 'horarioReinscripcion', component: HorarioReinscripcionComponent },
  { path: 'gruposCargados', component: GruposCargadosComponent },
  { path: 'extraescolar', component: ExtraescolarComponent },
  { path: 'evaluacionDocente', component: EvaluacionDocenteComponent },
  { path: 'auditoriaServicio', component: AuditoriaServicioComponent },
  { path: 'menuH', component: MenuHComponent },{ 
    path: 'datos-alumno', component:DatosAlumnoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    DatosEscolaresComponent,
    VerificacionBecaComponent,
    KardexCalificacionesComponent,
    HorarioComponent,
    CalificacionesExamenesComponent,
    CalificacionesParcialesComponent,
    ResidenciasComponent,
    TutoriasComponent,
    SeleccionMateriasComponent,
    PrefichaPagoComponent,
    HorarioReinscripcionComponent,
    GruposCargadosComponent,
    ExtraescolarComponent,
    EvaluacionDocenteComponent,
    AuditoriaServicioComponent,
    ListaModulosComponent,
    MenuHComponent,
    DatosAlumnoComponent,
    HorarioHorarioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
