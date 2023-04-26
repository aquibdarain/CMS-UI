import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ExamsComponent } from './exams/exams.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ContentsComponent } from './layouts/contents/contents.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { CognizantComponent } from './material/cognizant/cognizant.component';
import { TcsComponent } from './material/tcs/tcs.component';
import { InfosysComponent } from './material/infosys/infosys.component';
import { WiproComponent } from './material/wipro/wipro.component';
import { CapgeminiComponent } from './material/capgemini/capgemini.component';
import { AccentureComponent } from './material/accenture/accenture.component';
import { QuizsComponent } from './quizs/quizs.component';
import { QuestionsComponent } from './material/questions/questions.component';
import { ReactiveFormsModule } from '@angular/forms';



// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ServicesComponent,
    BlogsComponent,
    ExamsComponent,
    SettingsComponent,
    SublevelMenuComponent,
    NavbarComponent,
    ContentsComponent,
    FooterComponent,
    CognizantComponent,
    TcsComponent,
    InfosysComponent,
    WiproComponent,
    CapgeminiComponent,
    AccentureComponent,
    QuizsComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     // required animations module
    // ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
