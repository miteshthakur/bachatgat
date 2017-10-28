import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  closeNav(){
     document.getElementById("mySidenav").style.width = "0";
  }
  openNav(){
       document.getElementById("mySidenav").style.width = "250px";
  }
}
