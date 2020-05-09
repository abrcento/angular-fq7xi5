import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HierarchyChartComponent} from './hierarchy-chart/hierarchy-chart.component';
import { TreeChartComponent } from './tree-chart/tree-chart.component';

 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HierarchyChartComponent, TreeChartComponent],
  exports: [HierarchyChartComponent,TreeChartComponent]
})
export class ChartsModule { }