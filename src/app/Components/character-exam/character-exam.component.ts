import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


interface sign{r1:boolean;r2:boolean}
interface character{code:number;name1:string;name2:string;checked1:boolean;checked2:boolean;arr:sign[]}

@Component({
  selector: 'app-character-exam',
  templateUrl: './character-exam.component.html',
  styleUrls: ['./character-exam.component.css']
})
export class CharacterExamComponent implements OnInit {
  
first:boolean;
second:boolean;
//סגנון אישיות מרכזי
character:number=2;
//סגנון אישיות משני
character1:number=2;
characters1:character[];
characters2:character[];

mone1:number=0;
mone2:number=0;
mone3:number=0;
mone4:number=0;

sum1:number=0;
sum2:number=0;

characters:number[]=[0,0];

  constructor(private router:Router,private userService:UserService) {
      
    this.characters1=[
      {code:0,name1:'שיטתי',name2:'אקראי',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:1,name1:'מחושב',name2:'ספונטני',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:2,name1:'מאורגן',name2:'בלתי מאורגן',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:3,name1:'חוסם (שומר בבטן)',name2:'מבטא (חושף דעותיו)',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:4,name1:'מתמקד במשימה',name2:'מתמקד ביחסי אנוש',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:5,name1:'בוחן',name2:'אימפולסיבי',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:6,name1:'מרוחק',name2:'קרוב',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:7,name1:'מאופק',name2:'מלא חיים',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:8,name1:'בשליטה עצמית',name2:'נינוח, משוחרר',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:9,name1:'מובנה',name2:'בלתי מובנה',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:10,name1:'מתבדל',name2:'מעורב עם הבריות',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:11,name1:'נוקשה',name2:'גמיש',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:12,name1:'מעונב',name2:'לא רשמי',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:13,name1:'שכלתני',name2:'רגשני',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:14,name1:'מתוח',name2:'רפוי',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:15,name1:'בלתי זמין',name2:'זמין',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:16,name1:'ממוקד',name2:'בלתי ממוקד',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:17,name1:'ממושמע',name2:'מפוזר',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:18,name1:'שגרתי',name2:'לא שועה למוסכמות',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
    ];

    this.characters2=[
      {code:0,name1:'מצטרף',name2:'לוקח פיקוד',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:1,name1:'מהסס',name2:'מוכן',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:2,name1:'מקבל בהבנה',name2:'מאתגר',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:3,name1:'מתבייש',name2:'מכריע',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:4,name1:'מופנם',name2:'מוחצן',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:5,name1:'שקט',name2:'רועש',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:6,name1:'משלים',name2:'יזם',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:7,name1:'נסוג',name2:'אומר את שלו',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:8,name1:'מקשיב',name2:'דברן',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:9,name1:'מאופק',name2:'דוחף',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:10,name1:'שאלות',name2:'הצהרות',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:11,name1:'סמוי',name2:'גלוי',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:12,name1:'מסכים',name2:'מתווכח',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:13,name1:'נשלט',name2:'משתלט',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:14,name1:'כבד',name2:'מזרז',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:15,name1:'מבליע',name2:'מבטא',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:16,name1:'נמנע',name2:'ניגש',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:17,name1:'מצמצם',name2:'מתרחב',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]},
      {code:18,name1:'פורש',name2:'פועל',checked1:false,checked2:false,arr:[{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false},{r1:false,r2:false}]}
    ];
    this.first=true;
    //יכול להיות שלא צריך לאתחל אותו כאן בפאלס
    this.second=false;
   }

  ngOnInit(): void {
  }
  Cheacked1Changed(code:number)
  {
    this.characters1[code].checked1=!(this.characters1[code].checked1);
  }
  Cheacked2Changed(code:number)
  {
    this.characters1[code].checked2=!(this.characters1[code].checked2);
  }
  Cheacked3Changed(code:number)
  {
    this.characters2[code].checked1=!(this.characters2[code].checked1);
  }
  Cheacked4Changed(code:number)
  {
    this.characters2[code].checked2=!(this.characters2[code].checked2);
  }

  RadioCheackedChanged(radioNum:number,code:number)
  {
    if(this.characters1[code].checked1)
    {
      for (let i = 0; i < this.characters1[code].arr.length; i++) {
        if(i==radioNum-1)
          this.characters1[code].arr[i].r1=true;
        else 
          this.characters1[code].arr[i].r1=false;       
      }
      console.log(this.characters1);
    }
    else
    {
      for (let i = 0; i < this.characters1[code].arr.length; i++) {
        if(i==radioNum-1)
          this.characters1[code].arr[i].r2=true;
        else 
          this.characters1[code].arr[i].r2=false;       
      }
    }
  }

  RadioCheackedChanged2(radioNum:number,code:number)
  {
    if(this.characters2[code].checked1)
    {
      for (let i = 0; i < this.characters2[code].arr.length; i++) {
        if(i==radioNum-1)
          this.characters2[code].arr[i].r1=true;
        else 
          this.characters2[code].arr[i].r1=false;       
      }
      console.log(this.characters2);
    }
    else
    {
      for (let i = 0; i < this.characters2[code].arr.length; i++) {
        if(i==radioNum-1)
          this.characters2[code].arr[i].r2=true;
        else 
          this.characters2[code].arr[i].r2=false;       
      }
    }
  }
  Next()
  {
    this.first=false;
    this.second=true;
    this.characters1.forEach(element => {
      if(element.checked1==true)
      {
        this.mone1++;
      }
      else
        this.mone2++;
    });
    this.sum1=this.mone1-this.mone2;
    console.log(this.sum1)
    
  }
  Finish()
  {
    this.characters2.forEach(element => {
      if(element.checked1==true)
      {
        this.mone3++;
      }
      else
        this.mone4++;
    });
    this.sum2=this.mone3-this.mone4;
    this.first=false;
    this.second=false;
    this.CheckCharacter();
   // this.router.navigate(['/app-fill-hours']);
  }
  CheckCharacter()
  {
    //1=משימתי
    //2=מנתח
    //3=מקדם
    //4=תומך
    if(this.sum2>=1 && this.sum2<=20)
    {
      if(this.sum1>=1 && this.sum1<=20)
      {
        if(this.sum2>10 && this.sum2<=20 && this.sum1>10 && this.sum1<=20)
        {
          //console.log('משימתי משימתי1')
          this.character=1
          this.character1=1
        }
        else
          if(this.sum1>10 && this.sum1<=20 && this.sum2>=0 && this.sum2<=10)
            //console.log('2משימתי מנתח')
            {
              this.character=1
              this.character1=2
            }
          else
            if(this.sum2>=0 && this.sum2<=10 && this.sum1>=0 && this.sum1<=10)
              //console.log('4משימתי תומך')
               {
                this.character=1
                this.character1=4
               }
                if(this.sum2>10 && this.sum2<=20 && this.sum1>=0 && this.sum1<=10)
                  //console.log('3משימתי מקדם')
                  {
                    this.character=1
                    this.character1=3
                  }
                  
      }
      else
      {
        if(this.sum1<0 && this.sum1>=-20)
        {
          if(this.sum2<10 && this.sum1>-10)
            //console.log('10מקדם מנתח')
            {
              this.character=3
              this.character1=2
            }
          else
            if(this.sum2>=10 && this.sum2<=20 && this.sum1>-10)
              //console.log('9מקדם משימתי')
              {
                this.character=3
                this.character1=1
              }
            else 
              if(this.sum2<10 && this.sum2>=0 && this.sum1<-10)
                //console.log('12מקדם תומך')
                {
                  this.character=3
                  this.character1=4
                }
              else
                //console.log('11מקדם מקדם')
               {
                this.character=3
                this.character1=3
               }
        }
      }
    }
    else{
      if(this.sum1>=0 && this.sum1<=20)
      {
        if(this.sum2>=-10)
        {
          if(this.sum1<10)
            //console.log('7מנתח מקדם')
          {
            this.character=2
            this.character1=3
          }
          else
            //console.log('5מנתח משימתי')
        {
          this.character=2
          this.character1=1
        }
        }
        else
        {
          if(this.sum1<10)
            //console.log('8מנתח תומך')
         {
          this.character=2
          this.character1=4
         }
          else
            //console.log('6מנתח מנתח')
            {
              this.character=2
              this.character1=2
            }
        }
      }
      else
      {
        if(this.sum2<-10)
        {
          if(this.sum1>-10)
            //console.log('14תומך מנתח')
            {
              this.character=4
              this.character1=2
            }
          else
            //console.log('16תומך תומך')
           {
            this.character=4
            this.character1=4
           }
        }
        else
        {
          if(this.sum1>-10)
            //console.log('13תומך משימתי')
            {
              this.character=4
              this.character1=1
            }
          else
            //console.log('15תומך מקדם')
            {
              this.character=4
              this.character1=3
            }
        }
      }
    }


    this.UpdateCharacter();
  }
  UpdateCharacter()
  {
    //לשנות את ה-11111111
    //יכול להיות שיש בעיה ב)()
      this.characters[0]=this.character;
      this.characters[1]=this.character1;
      this.userService.UpdateCharacter(59309898).subscribe(()=>{alert('טיפוס האישיות שלך עודכן בהצלחה')})
  }
}
