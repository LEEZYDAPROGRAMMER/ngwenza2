import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ngwenza';
  toDo=[{name:"bath",time:" 5:00"},{name:"eat",time:"12:00"},{name:"sleep ",time:"21:00"}];
  
  newToDoName : string="";
  newToDoTime : string="";
   
  editedName :string="";
  editedTime :string="";
   empty=false;
   toVal=null;
  addToDo()
  {
    
    
     
    if(this.newToDoName!=null&&this.newToDoTime!=null)
    {
      this.toDo.push({name:this.newToDoName,time:this.newToDoTime});
      this.empty=false;
    
    }
    else
    {
      this.empty=true;
    }
        
    this.newToDoName=null;
    this.newToDoTime=null;
  }
  delete(todos)
  {
      let index= this.toDo.indexOf(todos);
      this.toDo.splice(index,1);

  }
  edit(todos,editedName,editedTime)
  {
      let index= this.toDo.indexOf(todos);
      this.toDo[index].name=editedName;
      this.toDo[index].time=editedTime;
      this.editedName=null;
      this.editedTime=null;
  }
}
