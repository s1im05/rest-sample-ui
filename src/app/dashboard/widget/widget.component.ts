import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {WidgetService} from '../../service/widget.service';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnDestroy {

    $route: Subscription;
    wait: boolean;
    widget: Widget;

    @Input() type: string;
    @Output() updated: EventEmitter<string> = new EventEmitter();

    constructor(public route: ActivatedRoute, public service: WidgetService) {
    }

    ngOnInit() {
        this.$route = this.route.params.subscribe(params => {
            if (params.id) {
                this.load(params.id);
            } else if (this.type === 'create') {
                this.widget = {
                    name: null,
                    price: null,
                    description: null
                };
            }
        });
    }

    ngOnDestroy() {
        this.$route.unsubscribe();
    }

    load(id: number) {
        this.wait = true;
        this.service.getById(id).then(res => {
            this.widget = res;
            this.wait = false;
        });
    }

    update(e: any) {
        e.preventDefault();
        if (this.wait) {
            return;
        }

        this.wait = true;
        this.service.update(this.widget).then(res => {
            this.updated.emit('update');
            this.wait = false;
        });
    }

    remove(id: number) {
        if (window.confirm('Are you sure?')) {
            this.wait = true;
            this.service.remove(id).then(res => {
                this.updated.emit('remove');
                this.wait = false;
            });
        }
    }

    add(e: any) {
        e.preventDefault();
        if (this.wait) {
            return;
        }

        this.wait = true;
        this.service.add(this.widget).then(res => {
            this.updated.emit('add');
            this.wait = false;
        });
    }
}
