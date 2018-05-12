/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';


@Directive({
    selector: '[appColor]'
})
export class ColorDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    @HostBinding('style.color') color;
    @Input('appColor') textColor = 'black';

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {

        // this.el.nativeElement.style.color = this.textColor;
        //this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
        this.color = this.textColor;
    }

    @HostListener('click') click() {
        // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black')

        this.backgroundColor = 'green';
    }


}