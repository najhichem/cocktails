import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-fruits',
    templateUrl: './fruits.component.html',
    styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

    @Input('f') public fruit: string;
    @Output() public deleteF: EventEmitter<string> = new EventEmitter;

    constructor() {}

    ngOnInit() {
    }

    deleteFruit() {
        this.deleteF.emit(this.fruit);
    }
}
