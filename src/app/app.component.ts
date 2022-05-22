import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
  constructor(private userSerice:UserService){}
  id!:number;
  pw="";
  able=true
  txtans=''
  disable()
  {
    if(this.id!=null&&this.pw!='')
    this.able=false
  }
  check()
{
  this.userSerice.login(this.id,this.pw).subscribe(ans=>{
if(ans=='שם משתמש לא קיים במערכת')
  alert('שם משתמש לא קיים במערכת')
if(ans=='סיסמא שגויה')
   alert('סיסמא שגויה')

  })
}
checkNew()
{
  this.userSerice.login(this.id,this.pw).subscribe(a=>{
    
  })
}
}
