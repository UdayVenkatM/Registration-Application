import { Component, OnInit } from '@angular/core';
import { USERS } from '../users';
import * as XLSX from 'xlsx'; 

interface User {
  name: string;
  mobile: string;
  city: string;
  serviceType: string;
  experience: number;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = USERS;
  nameSearchText: string;
  mobileSearchText: string;
  citySearchText: string;
  fileName= 'ExcelSheet.xlsx';  

  constructor() { }

  ngOnInit() {
  }

  exportexcel(): void 
    { 
       let element = document.getElementById('user-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       XLSX.writeFile(wb, this.fileName);
			
    }

}
