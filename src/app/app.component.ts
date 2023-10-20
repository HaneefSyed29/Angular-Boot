import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'AngularBootStrap';
  tasks: any = [];
  data = "Haneef";
  today = Date();
  storeTask(task: any){
    this.tasks.push(task);
  }
}
