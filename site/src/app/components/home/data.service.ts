import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './User';

import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {

    constructor(private http: Http) {}

    get(username: string, password: string, refresh: boolean): Promise<User[]> {
        return this.http.get(environment.getPath(username, password, refresh))
            .toPromise()
            .then(response => <User[]> response.json());
    }
    unfollow(username: string, password: string, usernames: string[]) {
        return this.http.post(`data/unfollow?username=${username}&password=${password}`, usernames)
            .toPromise()
            .then(response => response.json());
    }
}