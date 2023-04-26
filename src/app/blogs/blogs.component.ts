import { Component, OnInit } from '@angular/core';
import { UserService } from '../userServices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {

  constructor(private userSer: UserService, private router: Router) {
    this.getAllUser();
  }

  userArr: any = [];
  userId:any;

  ngOnInit(): void {}

  getAllUser() {
    this.userSer.getAllUser().subscribe(
      (success) => {
        console.log(success);
        this.userArr = success;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  sendUserId(s:any){
    this.router.navigate(['../services'], {
      queryParams: {
        id: s.id
      }
    });
  }

  deleteStudent(id: any) {
    this.userSer.deleteUser(id).subscribe((success) => {
      console.log(success);
       this.getAllUser();

    }, (error) => {
      console.log(error);
    })
  }
}
