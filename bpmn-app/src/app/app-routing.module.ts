import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from "./code/code.component";
import { DiagramComponent } from "./diagram/diagram.component";
import { HomeComponent } from "./home/home.component";
import { ViewerComponent } from "./viewer/viewer.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'code', component: CodeComponent },
  { path: 'diagram', component: DiagramComponent },
  { path: 'view', component: ViewerComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
