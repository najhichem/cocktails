import {
    Component, OnInit, Input, EventEmitter, Output, ContentChild, ElementRef, OnChanges, DoCheck,
    AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy

} from '@angular/core';

@Component({
    selector: 'app-fruits',
    templateUrl: './fruits.component.html',
    styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy {

    @Input('f') public fruit: string;
    @Output() public deleteF: EventEmitter<string> = new EventEmitter;
    @ContentChild('p') public el: ElementRef;

    @Input('') public data: string;

    constructor() {

        console.log(' this data : ' + this.data);
    }

    ngOnChanges(simpleChange) {
        console.log('Ng On Change value : ' + this.data);
    }



    ngOnInit() {
        console.log('Ng On INIT value : ' + this.data);
    }

    ngDoCheck() {
        console.log('Ng Do Check value : ' + this.data);
    }

    ngAfterViewChecked() {
        console.log('Ng AfterViewChecked value : ' + this.data);
    }

    ngAfterViewInit() {
        console.log('Ng AfterViewInit value : ' + this.data);
    }

    ngAfterContentInit() {
        console.log('Ng AfterContentInit value : ' + this.data);
    }

    ngAfterContentChecked() {
        console.log('Ng AfterContentChecked value : ' + this.data);
    }
    ngOnDestroy() {
        console.log('Ng OnDestroy value : ' + this.data);
    }


    deleteFruit() {
        this.deleteF.emit(this.fruit);
    }
}
