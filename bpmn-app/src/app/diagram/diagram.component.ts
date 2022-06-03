import { Component, OnInit, ViewChild } from '@angular/core';
import { BpmnEditorComponent } from 'ng-bpmn';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
  @ViewChild('ucBpmn') ucBpmn: BpmnEditorComponent | undefined;
  problemStatement: string = 'A bank has multiple accounts for clients. There can be several types of bank accounts (deposit, savings, etc)';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = '/assets/default.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        if (this.ucBpmn) {
          this.ucBpmn.loadXml(x);
        }
      },
    );
  }

  handleExport() {
    // Export as HTML
    console.log(this.ucBpmn?.el.nativeElement.innerHTML);
  }

}
