import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphViewComponent } from './components/graph-view/graph-view.component';

const routes: Routes = [
  {
    path: '',
    component: GraphViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphRoutingModule {}
