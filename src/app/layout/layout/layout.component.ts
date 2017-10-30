import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    navShow  = false;
    year = new Date().getFullYear();

    constructor() {
    }

    ngOnInit() {
    }

    toggleNav(e: any) {
        this.navShow    = !this.navShow;
    }

    hideNav(e: any) {
        window.setTimeout(() => {
            this.navShow    = false;
        }, 200);
    }

}
