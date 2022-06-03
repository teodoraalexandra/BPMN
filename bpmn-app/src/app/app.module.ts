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

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    DiagramComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
