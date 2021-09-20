import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import {Issue} from '../models/issue';
import { PeriodicElement } from '../models/periodic';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  list: PeriodicElement[] = [
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
  list$: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject(this.list);

  constructor() {
  }


  update(index, field, value) {
    this.list = this.list.map((e, i) => {
      if (index === i) {
        return {
          ...e,
          [field]: value
        }
      }
      return e;
    });
    this.list$.next(this.list);
  }

  getControl(index, fieldName) {
  }



}