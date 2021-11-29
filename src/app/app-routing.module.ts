import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
  path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'blog', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) }, { path: 'add-blogs', loadChildren: () => import('./pages/add-blogs/add-blogs.module').then(m => m.AddBlogsModule) },
  { path: 'blog-details', loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
