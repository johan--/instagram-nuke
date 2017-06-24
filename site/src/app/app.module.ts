import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeModule } from './components/home/home.module';

import { AppComponent }   from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HomeModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }