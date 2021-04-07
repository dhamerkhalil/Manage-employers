import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css']
})
export class EmployersListComponent implements OnInit {
  displayList: any;
  page = 1
  rows = 10 
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getEmployersList();
    
  }

  getEmployersList(){
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe( data => {
      this.displayList = data;
      console.log(data)
    });
  }

 sortTableColumnAsString(columnName : string){
  this.displayList.data.sort(this.sortByPropertyAsString(columnName));
 }

 
 sortTableColumnAsInteger(columnName : string){
  this.displayList.data.sort(this.sortByPropertyAsString(columnName));
  }
 


 private sortByPropertyAsString(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }
  }

 private sortByPropertyAsNumber(property){  
  return function(a,b){  
     if(parseInt(a[property]) > parseInt(b[property]))  
        return 1;  
     else if(parseInt(a[property]) < parseInt(b[property]))  
        return -1;  
     return 0;  
  } 
 }

 deleteRow(item: any){
    const index: number = this.displayList.data.indexOf(item);
    if (index !== -1) {
        this.displayList.data.splice(index, 1);
    } 
 }
}
