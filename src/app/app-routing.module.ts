import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path :'main',component: MainpageComponent,canActivate: [AuthGuard]},
  {path:'home',component:SignInComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}//,makes the app to route to welcome on default when its served
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
