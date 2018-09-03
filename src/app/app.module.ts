import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthService} from './service/auth.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './component/login/login.component';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {PupilComponent} from './component/pupil/pupil.component';
import {PupilService} from './service/pupil.service';
import {GroupService} from './service/group.service';
import {NgDatepickerModule} from 'ng2-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PupilComponent,
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, NgDatepickerModule, routing
  ],
  providers: [AuthService, PupilService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
