import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { UserModule } from '../user/user.module';

import { TableComponent } from './table.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UserModule
    ],
    exports: [
        TableComponent
    ],
    declarations: [
        TableComponent
    ]
})
export class TableModule { }
