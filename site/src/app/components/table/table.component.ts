import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../home/data.service';

@Component({
    selector: 'user-table',
    templateUrl: './views/table.component.html',
    styleUrls: ['./styles/table.component.css']
})
export class TableComponent {
    constructor(private dataService: DataService) {}
    @Input() username;
    @Input() password;
    @Input() users;
    selected = {};
    page = 0;
    perPage = 10;
    perPageOptions = [5, 10, 20, 50, 100];
    gotoPage(page: number): void {
        this.page = page;
    }
    nextPage(): void {
        this.page = Math.min(this.page + 1, this.getPageCount());
    }
    previousPage(): void {
        this.page = Math.max(this.page - 1, 0);
    }
    getPageCount(): number {
        if (this.users) {
            return Math.ceil(this.users.length / this.perPage);
        } else {
            return 0;
        }
    }
    setPerPage(value: number) {
        this.perPage = value;
    }
    generateArray(len: number) {
        return new Array(len).fill(1).map((v, k) => k);
    }
    getSelected(): string[] {
        return Object.keys(this.selected)
            .map(key => ({key, val: this.selected[key]}))
            .filter(({val}) => val)
            .map(({key}) => key);
    }
    unfollow() {
        this.dataService.unfollow(this.username, this.password, this.getSelected())
            .then(() => {
                console.log('UNFOLLOWED');
            });
    }
}
