import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchShowComponent } from './search-show/search-show.component';
import { ResultGridComponent } from './result-grid/result-grid.component';
import {FormsModule} from '@angular/forms';
import { ShowDetailViewerComponent } from './show-detail-viewer/show-detail-viewer.component';
import { ShowGenresComponent } from './show-genres/show-genres.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowTileComponent } from './show-tile/show-tile.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchShowComponent,
    ResultGridComponent,
    ShowDetailViewerComponent,
    ShowGenresComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomepageComponent,
    ShowTileComponent,
    EpisodeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
