import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-media',
    templateUrl: './views/user-media.component.html',
    styleUrls: ['./styles/user-media.component.css']
})
export class UserMediaComponent {
    @Input() media;
}
