import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'todos',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
