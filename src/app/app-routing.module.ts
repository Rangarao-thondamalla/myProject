import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { AuthgaurdService } from './authgaurd.service';
import { OnlyLoggedInUsersGuard} from './only-logged-in-users.guard';
import { RegisterComponent } from './register/register.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TestcomponentComponent } from './components/testcomponent/testcomponent.component';
import { EditorcomponentComponent } from './editorcomponent/editorcomponent.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path :'home', component :HomeComponent},
  { path : 'aboutus', component: AboutusComponent},
  { path : 'appservices', component: ServicesComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'register', component: RegisterComponent},
  { path: 'reactiveforms', component : ReactiveformsComponent},
  { path: 'testcomponent', component : TestcomponentComponent},
  { path: 'editorcomponent', component : EditorcomponentComponent},
  { path : '**',  component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
