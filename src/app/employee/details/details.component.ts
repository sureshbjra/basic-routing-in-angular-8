import { Component, OnInit } from '@angular/core';
import { EmployeeService } from  '../../employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers : []
})
export class DetailsComponent implements OnInit {

  public employeeList : any ;

  constructor(private empDetails : EmployeeService) { }

  ngOnInit() {
    this.empDetails.getEmployees().subscribe(res => this.employeeList = res);
  }

  delete(){
    alert("Do you want delete?");
  }

}
