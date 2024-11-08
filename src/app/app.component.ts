import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParameterDecorater';

  username :string ="Vishwajeet";
  age :number = 25;
  mobile:string="9975789242";
persons:string[]=['Vishwajeet','Yash','Nishant','Tanmay'];


message:string | undefined

showemployee: boolean = false;

receiveMsg($event:string)
{
  this.message=$event;
  !this.showemployee;
}

}
