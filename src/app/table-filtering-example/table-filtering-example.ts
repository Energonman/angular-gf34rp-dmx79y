import {Component, Inject} from '@angular/core';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { MatTable } from '@angular/material/table';
import { Observable, of as observableOf, merge } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CoreService } from '../services/core.service';


export interface PeriodicElement {
  name: string;
  MemberRefID: number;
  Marital_Status: string;
  Address: string;
  Salary: number;
  Employment_StartDate: string;
  Joined_Scheme_on: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {MemberRefID: 1, name: 'Paul Hydrogen',Marital_Status: 'Married',Address: '8 appt Hillview Towers', Salary: 46000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 2, name: 'Helen Helium',Marital_Status: 'Not married',Address: '9 Mount Hillview lawn', Salary: 56000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 3, name: 'Larry Lithium',Marital_Status: 'Married',Address: '81 The View lawn', Salary: 78000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 4, name: 'Mary-Berry Beryllium',Marital_Status: 'Married',Address: '87 Mount Hillview lawn', Salary: 112000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 5, name: 'Boron Von Muchousen',Marital_Status: 'Married',Address: '88 Mount Hillview lawn', Salary: 80000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 6, name: 'Carl Carbon',Marital_Status: 'Married',Address: '7 Mount Barry lawn', Salary: 39000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 7, name: 'Nikita Nitrogen',Marital_Status: 'Married',Address: '18 Mount Hillview street', Salary: 46000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 8, name: 'Ollie Oxygen',Marital_Status: 'Single',Address: '80 Mount Hillview lawn', Salary: 99000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 9, name: 'Fred Fluorine',Marital_Status: 'Married',Address: '55  Hillview dean', Salary: 112000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 10, name: 'Niall Neon',Marital_Status: 'Married',Address: '74 Mount Hillview lawn', Salary: 111000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 11, name: 'Sandra Sodium',Marital_Status: 'Single',Address: '112 Mount Hillview lawn', Salary: 56000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 12, name: 'Marcus Magnesium',Marital_Status: 'Married',Address: '117 Mount Hillview lawn', Salary: 55000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 13, name: 'Alan Aluminum',Marital_Status: 'Married',Address: '58 Mount Hillview lawn', Salary: 200000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 14, name: 'Sarah Silicon',Marital_Status: 'Single',Address: '99  Hillview lawn', Salary: 130000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 15, name: 'Phil Phosphorus',Marital_Status: 'Married',Address: '22 Mount Hillview lawn', Salary: 80000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 16, name: 'Sean Sulfur',Marital_Status: 'Married',Address: '2 Mount Hillview lawn', Salary: 98000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 17, name: 'Cloe Chlorine',Marital_Status: 'Married',Address: '33 Mount Hillview park', Salary: 55000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 18, name: 'Aregon Argon',Marital_Status: 'Married',Address: '4 Mount Hillview lawn', Salary: 70000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 19, name: 'Peter Potassium',Marital_Status: 'Married',Address: '12 Mount Hillview lawn', Salary: 85000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
  {MemberRefID: 20, name: 'Cal Calcium',Marital_Status: 'Married',Address: '27 Mount Hillview park', Salary: 46000, Employment_StartDate: '22/03/1998', Joined_Scheme_on: '25/03/1998'},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample implements AfterViewInit {
 @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PeriodicElement>;
constructor(public dialog: MatDialog, public dataService: CoreService) {}
   name: string;
   index: number;
  MemberRefID: number;
  Marital_Status: string;
  Address: string;
  Salary: number;
  Employment_StartDate: string;
  Joined_Scheme_on: string;
  
  
  displayedColumns = ['MemberRefID', 'name','Marital_Status','Address','Salary','Employment_StartDate','Joined_Scheme_on','actions'];
  exampleDatabase: CoreService | null;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  

  openDialog(i: number, MemberRefID: number, Marital_Status: string, Address: string, Salary: number, Employment_StartDate: string, Joined_Scheme_on: string) {
    this.MemberRefID = MemberRefID;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '55%',
      data: {MemberRefID: MemberRefID,name: name, Marital_Status: Marital_Status, Address: Address,Salary: Salary, Employment_StartDate: Employment_StartDate, Joined_Scheme_on:Joined_Scheme_on }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.MemberRefID === this.MemberRefID);
        //const foundIndex = this.exampleDatabase.dataChange
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      /*console.log('The dialog was closed');
      this.Address = result;*/
    }});
  }
private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
}
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */