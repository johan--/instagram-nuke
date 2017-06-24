import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TableModule } from '../table/table.module';

import { HomeComponent } from './home.component';
import { DataService } from './data.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TableModule,
        FormsModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        DataService
    ]
})
export class HomeModule { }
