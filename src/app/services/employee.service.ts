import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb: FormBuilder,
              private firestore: Firestore) { }
  empForm = this.fb.group({
    _id: [''],
    fullName: ['', Validators.required],
    // email: ['' , Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
    email: ['' , [Validators.required, Validators.email]],
    gender: ['male'],
    phone: ['' , Validators.required],
    isPermanent: [false],
    dateOfJoining: ['', Validators.required],
    department: ['',Validators.required]
  })

  addUser(user: any){
let firebaseRef = collection(this.firestore , 'employeeAngularFirebase');
return addDoc(firebaseRef , user)
  }

  getUser(){
    let firebaseRef = collection(this.firestore , 'employeeAngularFirebase');
    return collectionData(firebaseRef , {idField: 'id'})
  }
  onEdit(user: any){
    let docRef = doc(this.firestore , `employeeAngularFirebase/${user._id}`);
    return updateDoc(docRef , user)

  }
  deleteEmployee(id: any){
    let docRef = doc(this.firestore , `employeeAngularFirebase/${id}`);
    return deleteDoc(docRef)
  }
}
