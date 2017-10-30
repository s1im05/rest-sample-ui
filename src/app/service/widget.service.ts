import {Injectable} from '@angular/core';
import {CommonService} from './common.service';


@Injectable()
export class WidgetService extends CommonService {

    root = '/widgets';

    getList(): Promise<Widget[]> {
        return this.httpGet(this.root + '/list');
    }

    getById(id: number): Promise<Widget> {
        return this.httpGet(this.root + '/' + id);
    }

    update(data: Widget): Promise<boolean> {
        return this.httpPut(this.root + '/' + data.id, data);
    }

    remove(id: number): Promise<boolean> {
        return this.httpDelete(this.root + '/' + id);
    }

    add(data: Widget): Promise<boolean> {
        return this.httpPost(this.root, data);
    }
}
