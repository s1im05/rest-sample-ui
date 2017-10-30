import {Component, OnInit, OnDestroy} from '@angular/core';
import {WidgetService} from '../service/widget.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    $route: Subscription;
    wait: boolean;
    list: Widget[];
    type: string;

    constructor(public service: WidgetService, public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.loadList();
        this.$route = this.route.url.subscribe(url => {
            this.type = (url[0] !== undefined && url[0].path === 'create') ? 'create' : 'view';
        });
    }

    ngOnDestroy() {
        this.$route.unsubscribe();
    }

    loadList() {
        this.wait = true;
        this.service.getList().then((list: Widget[]) => {
            this.list = list;
            this.wait = false;
        });
    }

    onUpdated(e: string) {
        switch (e) {
            case 'remove':
                this.router.navigateByUrl('/');
                break;
            case 'update':
            default:
                this.loadList();
        }
    }
}
