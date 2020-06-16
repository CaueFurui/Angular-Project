import { LogicExComponent } from './components/logic-ex/logic-ex.component';
import { FrontEndExComponent } from './components/front-end-ex/front-end-ex.component';
import { ArrayExComponent } from './components/array-ex/array-ex.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';



const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'arrayEx',
    component: ArrayExComponent
  },
  {
    path: 'frontEndEx',
    component: FrontEndExComponent
  },
  {
    path: 'logicEx',
    component: LogicExComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
