import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, URLSearchParams, RequestMethod} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';


@Injectable()
export class CommonService {

    constructor(public router: Router, public http: Http) {
    }

    public getUrlParams(params: Array<ServiceParams>): URLSearchParams {
        const searchParams = new URLSearchParams();
        if (params && params.length) {
            params.forEach(v => {
                searchParams.append(v.key, v.val);
            });
        }

        return searchParams;
    }

    public mapUrlParams(input: {}): Array<ServiceParams> {
        if (input) {
            return Object.keys(input).map(k => {
                return {key: k, val: input[k]};
            });
        } else {
            return null;
        }
    }

    private getRequest(method: RequestMethod,
                       url: string,
                       searchParams: {},
                       postParams: any,
                       unsafe?: boolean,
                       fullResponse?: boolean): Promise<any> {
        const fullUrl = environment.api_host + url;

        return this.http.request(fullUrl, {
            body: postParams ? postParams : null,
            method: method,
            search: this.getUrlParams(this.mapUrlParams(searchParams)),
            headers: null // provide auth headers here
        })
            .toPromise()
            .then(response => {
                return fullResponse ? response : (response.text() ? response.json() : {});
            })
            .catch(this.handleError.bind(this));
    }

    public httpGet(url: string, searchParams?: {}, unsafe?: boolean, fullResponse?: boolean): Promise<any> {
        return this.getRequest(RequestMethod.Get, url, searchParams, null, unsafe, fullResponse);
    }

    public httpPost(url: string, postParams: any, searchParams?: {}, unsafe?: boolean, fullResponse?: boolean): Promise<any> {
        return this.getRequest(RequestMethod.Post, url, searchParams, postParams, unsafe, fullResponse);
    }

    public httpPut(url: string, putParams: any, searchParams?: {}, unsafe?: boolean, fullResponse?: boolean): Promise<any> {
        return this.getRequest(RequestMethod.Put, url, searchParams, putParams, unsafe, fullResponse);
    }

    public httpDelete(url: string, searchParams?: {}, unsafe?: boolean, fullResponse?: boolean): Promise<any> {
        return this.getRequest(RequestMethod.Delete, url, searchParams, null, unsafe, fullResponse);
    }

    handleError(error: any) {
        switch (error.status) {
            case 401:
                // logout here
                break;
            case 403:
                this.router.navigate(['error', 403]);
                break;
            case 404:
                this.router.navigate(['error', 404]);
                break;
            case 408:
            case 412:
                break;
            default:
                this.router.navigate(['error']);
        }
    }
}
