import { Component, Input } from '@angular/core';

@Component({
    selector: '[user-row]',
    templateUrl: './views/user-row.component.html',
    styleUrls: ['./styles/user-row.component.css']
})
export class UserRowComponent {
    @Input() user;
    @Input() selected;
}
