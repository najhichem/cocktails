/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
    selector: '[appNgIfCustom]'
})
export class NgIfCustom {
    @Input('') set appNgIfCustom(condition: boolean) {
        if (condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}

}