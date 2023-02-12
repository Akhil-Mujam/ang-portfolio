import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path : 'about', component :AboutComponent },
  {path: '', redirectTo: '/about', pathMatch: 'full' },
  { path :'education', component:EducationComponent },
  { path :'skills' , component :SkillsComponent},
  {path : 'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AboutComponent,EducationComponent,SkillsComponent,ContactComponent];
