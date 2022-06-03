import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { DiagramComponent } from './diagram/diagram.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from "@angular/forms";
import { ViewerComponent } from './viewer/viewer.component';
import { NgBpmnEditorModule } from 'ng-bpmn'

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    DiagramComponent,
    HomeComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    NgBpmnEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
