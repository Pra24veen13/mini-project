import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AddBlogsComponent } from './pages/add-blogs/add-blogs.component';

const routes: Routes = [
  { 
  path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'blog', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) }, { path: 'add-blogs', loadChildren: () => import('./pages/add-blogs/add-blogs.module').then(m => m.AddBlogsModule) },
  { path: 'blog-details', loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule) },
  { path: 'profile', loadChildren: () => import('./pages/profiles/profile/profile.module').then(m => m.ProfileModule) },
{path:"Edit", component:AddBlogsComponent},
  { path: 'prof-details', loadChildren: () => import('./pages/profiles/prof-details/prof-details.module').then(m => m.ProfDetailsModule) },
{path:'**', component:ErrorComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
