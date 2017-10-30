import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

    errorCode: number;
    routeSubscription: Subscription;

    constructor(protected route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => {
            switch (params.error) {
                case '403':
                case '404':
                case '500':
                    this.errorCode = +params.error;
                    break;
                default:
                    this.errorCode = 0;
            }
        });
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }
}
