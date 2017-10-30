import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout-clean',
    templateUrl: './layout-clean.component.html',
    styleUrls: ['./layout-clean.component.scss']
})
export class LayoutCleanComponent implements OnInit {

    year = new Date().getFullYear();

    constructor() {
    }

    ngOnInit() {
    }

}
