import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { Button } from 'protractor';
import { ExtraescolarService } from './extraescolar.service';
import { GrupoDisponible } from './grupoDisponible';
import { Actividades } from './actividades';

@Component({
  selector: 'app-extraescolar',
  templateUrl: './extraescolar.component.html',
  styleUrls: ['./extraescolar.component.css']
})
export class ExtraescolarComponent implements OnInit {
grupos:GrupoDisponible[];

  objetoActual = function(gruDis) {
    console.log(gruDis);
    document.getElementById('guardar').style.display = 'block';
    this.extraseleccionada = {
      periodo: gruDis.periodo, nombreActividad: gruDis.nombreActividad, grupo: gruDis.grupo,
      promotor: gruDis.promotor, hInicial: gruDis.hInicial, hFinal: gruDis.hFinal,
      dias: gruDis.dias
    };
  }


  
gpsDisponibles=[];
materiaModal="";

  funcMostrarGrupos($extra) {
    $(function() {
      $(".botonModal").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ "scrollTop": "0px" }, 600);
      })
    });

    this.gpsDisponibles = [];
    this.modals = "visibleNo";
    this.materiaModal=$extra;
    for (let i = 0; i < this.grupos.length; i++) {
            for (let j = 0; j < this.grupos[i].actividad.length; j++) {
                    console.log( this.grupos[i].actividad[j].nombreActividad);
                    if( this.grupos[i].actividad[j].nombreActividad == $extra ){
                    this.gpsDisponibles.push(
                    {
                     periodo:this.grupos[i].actividad[j].periodo,
                     nombreActividad:this.grupos[i].actividad[j].nombreActividad,
                     grupo:this.grupos[i].actividad[j].grupo,
                     promotor:this.grupos[i].promotor,
                     hInicial:this.grupos[i].actividad[j].hInicial,
                     hFinal:this.grupos[i].actividad[j].hFinal,
                     dias:this.grupos[i].actividad[j].dias,
                     lugares:this.grupos[i].actividad[j].lugares
                     }
                   );

                      }

             }
      }
      console.log(this.gpsDisponibles);
  }


  actividadesCulturales = [];
  actividadesDeportivas = [];



  datosmodal = "";
  extraseleccionada = {
    nombreActividad:"",
    periodo: "",
    nombre: "",
    grupo: "",
    promotor: "",
    hInicial: "",
    hFinal: "",
    dias: ""
  }

  modals = "modal";
  constructor(public service : ExtraescolarService) {
   service.getGruposDisponibles().subscribe((data:GrupoDisponible[])=>{
    this.grupos=data;
    });
    this.modals = "modal";
  }
  func($var) {
    this.modals = "visibleNo";
    this.datosmodal = "";
  }
  funcp($var) {
    this.modals = "visibleNo";
    this.datosmodal = $var;
    console.log($var);
  }
  cerrar() {
    this.modals = "modal";
  }

  guardarExtra(){
    //Aqui se manda al servidor
    alert("Inscripcion satisfactoria!!");
    document.getElementById('guardar').style.display = 'none';
  }

  ngOnInit() {
   this.service.getGruposDisponibles;

  }

  actividades = [
    this.actividadesCulturales = [{
      bailes: [], musicales: [], civicas: [], dts: [], visuales: []
    }],
    this.actividadesDeportivas = [{ pelotas: [], fisicas: [], nataciones: [], aeas: [] }]
  ]



  bailes = [
    'Ballet Tahitiano', 'Bellydance Fusión', 'Break Dance', 'Danza Aérea',
    'Danza Árabe', 'Electro Dance', 'Hip Hop', 'Hip Hop Avanzado', 'Hip Hop Principiante',
    'Jazz', 'Jazz Avanzado', 'Jazz Principiante', 'Popping Dance', 'Ritmos Latinos',
    'Ritmos Urbanos', 'Tango', 'Danza Floklorica',
  ]

  musicales = [
    'Orquesta Filarmónica', 'Orquesta Sinfónica', 'Rondalla', 'Rondalla Femenil', 'Rondalla Varonil',
    'Rondalla Y Taller De Guitarra', 'Taller Guitarra Popular', 'Coro De Cámara',
  ]

  civicas = [
    'Banda De Guerra', 'Edecanes', 'Escolta y guión', 'Grupo Cívico', 'Oratoria',
  ]

  dts = [
    'Periodismo', 'Radio', 'Taller De Arte Literario', 'Teatro', 'Teatro y Pantomima',
  ]

  visuales = [
    'Taller De Cinematografía', 'Taller de Fotografía y Dibujo', 'Cine Y Cortometraje',
  ]

  pelotas = [
    'Balón Mano', 'Balón Mano Femenil', 'Basquetbol Femenil',
    'Basquetbol Varonil', 'Beisbol', 'Frontón A Mano',
    'Fútbol Americano', 'Fútbol Rapido', 'Fútbol Rápido Femenil', 'Fútbol Soccer Varonil',
    'Hand Ball', 'Hockey Sobre Pasto', 'Ping Pong De Mesa', 'Softbol', 'Tenis', 'Tenis De Mesa',
    'Tochito', 'Tochito Femenil', 'Voleibol De Playa', 'Voleibol De Playa Femenil',
    'Voleibol De Playa Varonil', 'Voleibol Femenil', 'Voleibol Varonil', 'Fortalecimiento Y Tonicidad En Frontenis',
  ]

  fisicas = [
    'Activacion Fisica', 'Actividad Fisica', 'Aero Figth', 'Aerobics', 'Animacion Deportiva', 'Artes Marciales Europeas',
    'Atletismo Femenil', 'Atletismo Varonil', 'Box', 'Gimnasia Artística', 'Hiit Workout', 'Insanity', 'Judo', 'Karate Do',
    'Pesas', 'Porristas', 'Tae Kwon Do', 'Yoga', 'Yoga Dinamico', 'Yoga Iyengar', 'Yoga Meditativo', 'Zumba',
  ]

  nataciones = [
    'Natacion', 'Natacion Varonil', 'Natacion Femenil',
  ]


  aeas = [
    'Ajedrez', 'Ajedrez Paralelo', 'Deportes Electronicos', 'Tiro con Arco',
  ]




  

}


