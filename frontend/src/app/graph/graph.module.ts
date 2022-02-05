import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphRoutingModule } from './graph-routing.module';
import { GraphViewComponent } from './components/graph-view/graph-view.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [GraphViewComponent],
  imports: [CommonModule, GraphRoutingModule, NgxChartsModule],
})
export class GraphModule {}
