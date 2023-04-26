import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../userServices/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(
    private userSer: UserService,
    private router: Router,
    private actRoute: ActivatedRoute,
    // private toastr: ToastrService
  ) {}

  userId: any;
  userData: any;

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.userId = params;

      if (this.userId) {
        this.userSer.getUserByID(this.userId.id).subscribe((success: any) => {
          this.userData = success.result[0];
          this.userPatchData();
          console.log(this.userId);
        });
      }
    });
  }

  userPatchData() {
    this.contactForm.patchValue(this.userData);
    // this.toastr.success('patch value');
  }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNumber: new FormControl('', [Validators.required]),
    email: new FormControl(),
    dob: new FormControl(),
    github: new FormControl(),
    linkedin: new FormControl(),
    instagram: new FormControl(),
    twitter: new FormControl(),
    aadhar: new FormControl(),
    occupation: new FormControl(),
    address: new FormControl(),
  });

  updateUserData() {
    let obj = this.contactForm.value;
    let id = this.userId.id;
    this.userSer.updateUser(id, obj).subscribe((success) => {
      console.log(success);
      this.router.navigate(['/blogs']);
    });
  }

  addStudent() {
    let obj: any = [];
    obj = this.contactForm.value;
    this.userSer.createUser(obj).subscribe(
      (success) => {
        console.log(success);
        this.router.navigate(['/blogs']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
