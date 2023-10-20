import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'AngularBootStrap';
  tasks: any = [];
  signup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });
  data = "Haneef";
  today = Date();
  storeTask(task: any) {
    this.tasks.push(task);
  }
  userLogin(Item: any) {
    console.warn(Item);
  }
  formData(){
    console.warn(this.signup.value);
  }
}
