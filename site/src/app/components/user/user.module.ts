import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment/moment.module';

import { UserRowComponent } from './user-row.component';
import { UserMediaComponent } from './user-media.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MomentModule
    ],
    exports: [
        UserRowComponent,
        UserMediaComponent
    ],
    declarations: [
        UserRowComponent,
        UserMediaComponent
    ],
    providers: []
})
export class UserModule { }
