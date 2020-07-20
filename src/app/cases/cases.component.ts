import { Component, OnInit, ViewChild } from '@angular/core';
import { Cases } from '../cases';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  displayedColoumns: string [] = ['name', 'age', 'gender', 'address', 'city', 'country', 'status'];
  data: Cases[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCases()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
