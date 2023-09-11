import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { HomeComponent } from './pages/home/home.component';
import { SessionComponent } from './admin/session/session.component';
import { VenueComponent } from './admin/venue/venue.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"",component:MainlayoutComponent,children:[
    {path:"mainlayout",component:HomeComponent},
    {path:"session",component:SessionComponent},
    {path:"venue",component:VenueComponent}
  ],


}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
