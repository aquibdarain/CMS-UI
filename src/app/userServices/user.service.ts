import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(obj: any) {
    let url = 'http://localhost:2023/user/add';
    return this.http.post(url, obj);
  }

  getAllUser(){
    let url = "http://localhost:2023/user/getAllData"
    return this.http.get(url);
  }

  getUserByID(id:number){
    let url=`http://localhost:2023/user/getById/${id}`
    return this.http.get(url)
  }
  updateUser(id: number, obj:any){
    let url = "http://localhost:2023/user/update/"
    return this.http.put(url+id,obj)
  }

  deleteUser(id:number){
    let url="http://localhost:2023/user/delete/"
    return this.http.delete(url+id)
  }
}
