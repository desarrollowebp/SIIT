

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {
            var slide = 0;
           


            $(".slide-left").click(function () {
                slide = slide + 200;
                if (slide > 0) {
                    slide = 0;
                }
                
                $(".list-cat").css({ 'left': slide + 'px' });
            });

            $(".slide-right").click(function () {
                slide = slide - 200;
                let listWidth = $(".list-cat").width();
                let centerWidth = $(".slide-center").width() ;
                if (slide < -(listWidth - centerWidth)) {
                    slide = -(listWidth - centerWidth);
                }
                
                $(".list-cat").css({ 'left': slide + 'px' });
            });


        });
        $(document).ready(function () {
            var slide = 0;
            $(".slide-left2").click(function () {
                slide = slide + 200;
                if (slide > 0) {
                    slide = 0;
                }
                $(".list-cat2").css({ 'left': slide + 'px' });
            });

            $(".slide-right2").click(function () {
                slide = slide - 200;
                let listWidth = $(".list-cat2").width();
                let centerWidth = $(".slide-center2").width();
                if (slide < -(listWidth - centerWidth)) {
                    slide = -(listWidth - centerWidth);
                }
                $(".list-cat2").css({ 'left': slide + 'px' });
            });


        });
        
    }

}
