import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HierarchyChartComponent} from './hierarchy-chart/hierarchy-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HierarchyChartComponent],
  exports: [HierarchyChartComponent]
})
export class ChartsModule { }