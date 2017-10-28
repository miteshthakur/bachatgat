import { BrowserModule } from '@angular/platform-browser';
import { NgModule,AfterContentInit } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import Framework7 from '../js/framework7.min.js'

const appRoutes: Routes = [
  { path: 'member', component: MemberComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent
      ],
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements AfterContentInit{
myapp:Framework7;

ngAfterContentInit() {
    // contentChild is updated after the content has been checked
    console.log('AfterContentInit: ');
  this.myapp=  new Framework7({
    router: true,
    material: true
    // ... other parameters
});
  }
}
