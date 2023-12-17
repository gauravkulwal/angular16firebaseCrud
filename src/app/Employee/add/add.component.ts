import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  departments = [
    'Angular',
    'Java Developer',
    'Finance'
  ]
constructor (public userService: EmployeeService,
              private router: Router) {

}
onSubmit(){
if(this.userService.empForm.value._id == ''){
  this.userService.addUser(this.userService.empForm.value);
}
else{
  this.userService.onEdit(this.userService.empForm.value)
}
this.router.navigateByUrl('user/list')
  this.userService.empForm.reset();
  this.userService.empForm.controls['gender'].setValue('male');
  this.userService.empForm.controls['isPermanent'].setValue(false)
}

get f(){
  return this.userService.empForm.controls;
}
}
