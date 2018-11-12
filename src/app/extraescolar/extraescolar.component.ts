import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-extraescolar',
  templateUrl: './extraescolar.component.html',
  styleUrls: ['./extraescolar.component.css']
})
export class ExtraescolarComponent implements OnInit {


  objetoActual = function (gru) {
    console.log(gru);
    this.extraseleccionada = {
      periodo: gru.periodo, nombre: gru.nombre, grupo: gru.grupo,
      promotor: gru.promotor, hInicial: gru.hInicial, hFinal: gru.hFinal,
      dias: gru.dias
    };
  }

  actividadesCulturales = [];
  actividadesDeportivas = [];



  datosmodal = "";
  extraseleccionada = {
    periodo: "",
    nombre: "",
    grupo: "",
    promotor: "",
    hInicial: "",
    hFinal: "",
    dias: ""
  }

  modals = "modalExtraescolar";
  constructor() {
    this.modals = "modalExtraescolar";
  }
  func($var) {
    this.modals = "visibleNoExtraescolar";
    this.datosmodal = "";
  }
  funcp($var) {
    this.modals = "visibleNoExtraescolar";
    this.datosmodal = $var;
  }
  cerrar() {
    this.modals = "modalExtraescolar";

  }

  ngOnInit() {
    ///metoro para regresar arriba
    $(function(){
      $("#button").click(function(e){
          e.preventDefault();
          $("html, body").animate({"scrollTop": "0px"}, 600);
      })
  });
/////
    $(".submenu").click(function () {
      $(this).children("ul").slideToggle();
    }
    )

    $("ul").click(function (p) {
      p.stopPropagation();
    })

    if ($(window).width() > 720) {
      $(".submenu").children("ul").show();
    }
    else {
    }


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
    'Orquesta Filarmónica', 'Orquesta Sinfónica', 'Rondalla', 'Rondalla Femeni', 'Rondalla Varonil',
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


  maestros = [
    {
      periodo: '20183',
      grupo: 'RL',
      promotor: 'GALINDO ZALDIVAR M.V. ISAAC ALEJANDRO',
      hInicial: '13:00', 
      hFinal: '14:00',
      dias: 'L,MA,MI,J', 
      lugares: '20'
    },

    {
      periodo: '20183', 
      grupo: '1B',
      promotor: 'GARCIA GARCIA JOSE ANTONIO',
      hInicial: '11:00', 
      hFinal: '12:00', 
      dias: 'L,MA,MI,J',
      lugares: '15'
    },
  ]
}
