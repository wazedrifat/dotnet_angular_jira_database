import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { AddIssuesComponent } from './Issues/add-issues/add-issues.component';
import { ShowIssuesComponent } from './Issues/show-issues/show-issues.component';
import {SvcService} from './svc.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    AddIssuesComponent,
    ShowIssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [SvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
