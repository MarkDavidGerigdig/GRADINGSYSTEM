import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()studName : string = "";
  @Input()studYear : string = "";
  @Input()studGrades : string = "";
  @Input()teachName : string = "";
  @Input()teachSub : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
