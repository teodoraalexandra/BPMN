import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BpmnEditorComponent } from 'ng-bpmn';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
  @ViewChild('ucBpmn') ucBpmn: BpmnEditorComponent | undefined;
  public data: any;

  xmlModel: string = '';
  problemStatement: string = 'A bank has multiple accounts for clients. There can be several types of bank accounts (deposit, savings, etc)';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = '/assets/default.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        // @ts-ignore
        this.ucBpmn.loadXml(x);
      },
    );
  }

  handleExport() {
    console.log(this.ucBpmn);
  }

}
