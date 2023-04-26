import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamsComponent } from './exams/exams.component';
import { CognizantComponent } from './material/cognizant/cognizant.component';
import { QuestionsComponent } from './material/questions/questions.component';
import { QuizsComponent } from './quizs/quizs.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'quiz', component: QuizsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'cognizant', component: CognizantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
