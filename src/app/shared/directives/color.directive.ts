/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';


@Directive({
    selector: '[appColor]'
})
export class ColorDirective {

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.color = 'red';
    }
}