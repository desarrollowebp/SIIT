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
grupos;
extras;
bailes;musicales;civicas;dts;visuales;
pelotas;fisicas;nataciones;aeas;

  objetoActual = function(gruDis) {
    console.log(gruDis);
    document.getElementById('guardar').style.display = 'block';
    this.extraseleccionada = {
      periodo: gruDis.periodo, nombreActividad: gruDis.nombreActividad, grupo: gruDis.grupo,
      promotor: gruDis.promotor, hInicial: gruDis.hInicial, hFinal: gruDis.hFinal,
      dias: gruDis.dias
    };
  }

  actividades = {
    actividadesCulturales : [{
      bailes: [], musicales: [], civicas: [], dts: [], visuales: []
    }],
    actividadesDeportivas : [{ pelotas: [], fisicas: [], nataciones: [], aeas: [] }]
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
    //Regresa los grupos disponibles
    //console.log(this.service.getGruposDisponibles().subscribe(data => console.log(data)));
   service.getGruposDisponibles().subscribe((data)=>{
   //console.log(data);
   this.grupos=data;
   this.grupos=this.grupos.actividadesMaes;
   //console.log(this.grupos);
   });

    //Regresa todas las actividades extraescolares
   service.getExtraescolares().subscribe((data)=>{
    this.extras=data;
    this.extras=this.extras.actividadesExtra;
    //Actividades Culturales
    this.bailes=this.extras[0].actividades.actividadesCulturales[0].bailes;
    this.musicales=this.extras[0].actividades.actividadesCulturales[0].musicales;
    this.civicas=this.extras[0].actividades.actividadesCulturales[0].civicas;
    this.dts=this.extras[0].actividades.actividadesCulturales[0].dts;
    this.visuales=this.extras[0].actividades.actividadesCulturales[0].visuales;
    //Actividades Deportivas
    this.pelotas=this.extras[0].actividades.actividadesDeportivas[0].pelotas;
    this.fisicas=this.extras[0].actividades.actividadesDeportivas[0].fisicas;
    this.nataciones=this.extras[0].actividades.actividadesDeportivas[0].nataciones;
    this.aeas=this.extras[0].actividades.actividadesDeportivas[0].aeas;
    });

      //console.log(this.grupos); manda undefined

    this.modals = "modal";
  }

  funct() {
    this.grupos=this.grupos.actividadesMaes;
    //console.log(this.grupos);
    console.log(this.extras[0].actividades.actividadesDeportivas[0].pelotas);
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

}


