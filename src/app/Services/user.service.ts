import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:44317/api/user'; 
  constructor(private http:HttpClient) { }

  UpdateCharacter(id:number)//:Observable<number>
  {
    let headers=new Headers({'Content-type':'application/json;charset=utf-8'});
    return this.http.post<number>(this.url+'/updatecharacter/'+id,0);
  }
login(id:number,pass:string):Observable<string>
{
  return this.http.get<string>(this.url+'/Login/'+id+'/'+pass);
}
}
