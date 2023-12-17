import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  employeeList!: any[];
constructor(private empService:EmployeeService,
            private router: Router,
            private fb: FormBuilder){}     
  ngOnInit(): void {
    this.getEmployeeList()
  }
getEmployeeList(){
  this.empService.getUser().subscribe((result) => {
console.log(result)
this.employeeList = result
  })
}  
onEdit(user: any){
  this.empService.empForm  =  this.fb.group({
    _id: [user.id],
    fullName: [user.fullName, Validators.required],
    email: [user.email , Validators.required],
    gender: [user.gender],
    phone: [user.phone , Validators.required],
    isPermanent: [user.isPermanent],
    dateOfJoining: [user.dateOfJoining, Validators.required],
    department: [user.department,Validators.required]
  })
this.router.navigateByUrl('user/add');

} 
onDelete(id: any){
  console.log(id)
this.empService.deleteEmployee(id).then(() => {
  console.log('updated Successfully')
}).catch((err) => {
  console.log(err)
})
this.getEmployeeList()
}                                                                                       
}
