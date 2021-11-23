import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { AuthgaurdService } from './authgaurd.service';
import { OnlyLoggedInUsersGuard} from './only-logged-in-users.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path :'home', component :HomeComponent ,canActivate:[OnlyLoggedInUsersGuard] },
  { path : 'aboutus', component: AboutusComponent, canActivate:[OnlyLoggedInUsersGuard]},
  { path : 'appservices', component: ServicesComponent, canActivate:[OnlyLoggedInUsersGuard]},
  { path : 'contact', component: ContactComponent},
  { path : '**',  component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
