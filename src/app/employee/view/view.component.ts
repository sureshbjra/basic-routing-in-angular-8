import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public id:any;
  public employee:any;

  constructor(private route: ActivatedRoute , private empService: EmployeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmployeeById(this.id).subscribe(res => this.employee = res);
  }

}
