import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contador = 1;

  toggleSideMenu(ev) {
    if (this.contador == 1) {
      $('nav').animate({
        left: '0'
      });
      this.contador = 0;
    } else {
      this.contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }

    // Mostramos y ocultamos submenus
    $('.submenu').click(function(){
      $(this).children('.children').slideToggle();
    });

    $('ol').click(function(p){
      p.stopPropagation();
    })
  }
}
