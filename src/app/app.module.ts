import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
import { EvaluacionDocenteIntroduccionComponent } from './evaluacion-docente-introduccion/evaluacion-docente-introduccion.component';
import { AuditoriaServicioComponent } from './auditoria-servicio/auditoria-servicio.component';

import { PreSeleccionMateriasComponent } from './pre-seleccion-materias/pre-seleccion-materias.component';
import { CodigoColoresMateriaComponent } from './codigo-colores-materia/codigo-colores-materia.component';
import { CentroInfoComponent } from './centro-info/centro-info.component';
import { MenuHComponent } from './menu-h/menu-h.component';
import { EvaluacionDocenteComprobanteComponent } from './evaluacion-docente-comprobante/evaluacion-docente-comprobante.component';
import { AvanceMateriaAlumnoComponent } from './avance-materia-alumno/avance-materia-alumno.component';

import { PostSeleccionMateriasComponent } from './post-seleccion-materias/post-seleccion-materias.component';
<<<<<<< HEAD
import { DatosTablaAlumnoComponent } from './datos-tabla-alumno/datos-tabla-alumno.component';
=======
import { TablaHorarioComponent } from './tabla-horario/tabla-horario.component';
>>>>>>> 7785b037588975b0dc621b7cbf9abbbc638f31c4

const routes:Routes = [
  { path: '', component: LoginComponent },
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
  { path: 'evaluacionDocente/introduccion', component: EvaluacionDocenteIntroduccionComponent },
  { path: 'evaluacionDocente/comprobante', component: EvaluacionDocenteComprobanteComponent },
  { path: 'auditoriaServicio', component: AuditoriaServicioComponent },
  { path: 'menuH', component: MenuHComponent },
  { path: 'codigoColoresMateria', component: CodigoColoresMateriaComponent},
  { path: 'centroInfo', component: CentroInfoComponent},
  { path: 'menuH', component: MenuHComponent },
  { path: 'avanceMateriaAlumno', component:AvanceMateriaAlumnoComponent},
  { path: 'auditoriaServicio', component: AuditoriaServicioComponent },
  { path: 'postSeleccionMaterias', component:PostSeleccionMateriasComponent},
  { path: 'preSeleccionMaterias', component: PreSeleccionMateriasComponent},
<<<<<<< HEAD
  { path: 'datosTablaAlumno', component:DatosTablaAlumnoComponent}
=======
  { path: 'tablaHorario', component:TablaHorarioComponent}
>>>>>>> 7785b037588975b0dc621b7cbf9abbbc638f31c4
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
    EvaluacionDocenteIntroduccionComponent,
    AuditoriaServicioComponent,
    CodigoColoresMateriaComponent,
    CentroInfoComponent,
    MenuHComponent,
    MenuHComponent,
    EvaluacionDocenteComprobanteComponent,
    AvanceMateriaAlumnoComponent,
    PostSeleccionMateriasComponent,
    PreSeleccionMateriasComponent,
<<<<<<< HEAD
    DatosTablaAlumnoComponent,
=======
    TablaHorarioComponent,
>>>>>>> 7785b037588975b0dc621b7cbf9abbbc638f31c4
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
