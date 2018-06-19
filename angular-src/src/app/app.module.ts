import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { CommentsComponent } from './comments/comments.component';
import { AddListComponent } from './add-list/add-list.component';

import { ListService } from './services/list.service';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutmeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({

  declarations: [
    AppComponent,
    FooterComponent,
    AboutmeComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    ProjectsComponent,
    NotfoundComponent,
    AdminComponent,
    CommentsComponent,
    AddListComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListService],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
