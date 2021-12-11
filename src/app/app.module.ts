import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MyclassDirective } from './myclass.directive';

import { DataService} from './data.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AuthgaurdService } from './authgaurd.service';
import { DefaultPipe } from './default.pipe';
import { RegisterComponent } from './register/register.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MyclassDirective,
    AboutusComponent,
    ServicesComponent,
    PagenotfoundComponent,
    ContactComponent,
    DefaultPipe,
    RegisterComponent,
    ReactiveformsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    ReactiveFormsModule
  ],
  providers: [DataService,AuthgaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
