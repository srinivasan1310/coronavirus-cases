import { Component, OnInit } from '@angular/core';
import { Cases } from '../cases';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  displayColoumns: string [] = ['_id', 'name', 'age', 'address', 'city', 'country', 'status'];
  data: Cases[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {
    console.log('First loaded');
  }

  ngOnInit(): void {
    console.log('Second loaded');
    this.api.getCases().subscribe((res: any) => {
      this.data = res;
      console.log('Response Array *********', this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log('Response Error *********', err);
      this.isLoadingResults = false;
    });
  }
}
