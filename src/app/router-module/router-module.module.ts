import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../employee/create/create.component';
import { DetailsComponent } from '../employee/details/details.component';
import { ViewComponent } from '../employee/view/view.component';
import { EditComponent } from '../employee/edit/edit.component';

var routes: Routes = [{
  path: '',
  redirectTo: "details", pathMatch: 'full'
}, {
  path: "details",
  component: DetailsComponent
}, {
  path: "create",
  component: CreateComponent
},
{
  path: "view/:id",
  component: ViewComponent
},
{
  path: "edit/:id",
  component: EditComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RouterModuleModule { }
export const routingComponent = [CreateComponent, DetailsComponent, ViewComponent, EditComponent]
