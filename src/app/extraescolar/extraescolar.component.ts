import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-extraescolares',
  templateUrl: './extraescolar.component.html',
  styleUrls: ['./extraescolar.component.css']
})
export class ExtraescolarComponent implements OnInit {
  modals = "modal";
  constructor() {
    this.modals = "modal";
  }
  func() {
    this.modals = "visibleNo";
  }
  cerrar(){
    this.modals="modal";
  }
  ngOnInit() {
    $(".submenu").click(function() {
      $(this).children("ul").slideToggle();

    }
    )

    $("ul").click(function(p) {
      p.stopPropagation();
    })

    if ($(window).width() > 720) {


      $(".submenu").children("ul").show();



    }
    else {

    }


}
}
