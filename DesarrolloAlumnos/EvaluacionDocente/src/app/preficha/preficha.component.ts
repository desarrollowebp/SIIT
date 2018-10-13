import { Component, OnInit } from '@angular/core';

import { alumnos } from './alumnos';

@Component({
  selector: 'app-preficha',
  templateUrl: './preficha.component.html',
  styleUrls: ['./preficha.component.css']
})

export class PrefichaComponent implements OnInit {

  titulo = 'preficha';
  alumnos = alumnos;

  constructor() { }

  ngOnInit() {
  }

}
