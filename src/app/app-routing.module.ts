import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowDetailViewerComponent} from './show-detail-viewer/show-detail-viewer.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {EpisodeListComponent} from "./episode-list/episode-list.component";
import {LogoutScreenComponent} from "./logout-screen/logout-screen.component";
import {ResultGridComponent} from "./result-grid/result-grid.component";
import {AnalysisEditorComponent} from "./analysis-editor/analysis-editor.component";
import {ProfileComponent} from "./profile/profile.component";
import {EnrollUnderFacultyComponent} from "./enroll-under-faculty/enroll-under-faculty.component";
import {ViewPupilsComponent} from "./view-pupils/view-pupils.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'enroll', component: EnrollUnderFacultyComponent,canActivate: [AuthGuard]},
  {path: 'viewPupils', component: ViewPupilsComponent,canActivate: [AuthGuard]},
  {path: 'search/:query', component: ResultGridComponent},
  {path: 'details/:showId', component: ShowDetailViewerComponent},
  {path: 'search/:query/details/:showId', component: ShowDetailViewerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutScreenComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:profileId', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'details/:showId/episodes', component: EpisodeListComponent},
  {path: 'details/:showId/episodes/:episodeId/analysis', component: AnalysisEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
