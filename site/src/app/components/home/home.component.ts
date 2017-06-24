import { Component, Input, OnInit } from '@angular/core';

import { DataService } from './data.service';

import { User } from './User';

@Component({
    selector: 'home',
    templateUrl: './views/home.component.html',
    styleUrls: ['./styles/home.component.css']
})
export class HomeComponent {
    constructor(private dataService: DataService) {}
    username = '';
    password = '';
    refresh = false;
    users = null;
    search(): void {
        this.dataService.get(this.username, this.password, this.refresh)
            .then((users) => this.users = users as User[]);
    }
}
