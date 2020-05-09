import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
 
@Component({
  selector: 'tree-chart',
  templateUrl: './tree-chart.component.html',
  styleUrls: ['./tree-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeChartComponent implements OnInit {
margin = { top: 20, right: 120, bottom: 20, left: 120 };
width = 1200 - this.margin.right - this.margin.left;
height = 1200 - this.margin.top - this.margin.bottom;

tree = d3.tree().size([this.height, this.width]);
i = 0;
duration = 750;
root;
svg;
g;
 
_treeData =   {
    "name": "Top Level",
    "children": [
      { 
        "name": "Level 2: A",
        "children": [
          { "name": "Son of A" },
          { "name": "Daughter of A" }
        ]
      },
      { "name": "Level 2: B" }
    ]
  };

constructor() { }

ngOnInit() {
 this.loadChart();
}

loadChart() {
  
this.svg = d3.select('#treeView').append('svg')
  .attr('width', this.width + this.margin.right + this.margin.left)
  .attr('height', this.height + this.margin.top + this.margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top 
   + ')');
  console.log('test');
this.root = d3.hierarchy(this._treeData, (d: any) => d.children);
  console.log('test');


 this.root.x0 = 0;
 this.root.y0 = this.height / 2;
 this.root.children.forEach(this.collapse);

 this.update(this.root);

}
collapse = (d) => {
 if (d.children) {
   d._children = d.children;
   d._children.forEach(this.collapse);
   d.children = null;
 }
}

update(source) {

  
const treeData = this.tree(this.root);
const nodes = treeData.descendants(),
  links = treeData.descendants().slice(1);

nodes.forEach((d) => { d.y = d.depth * 180; });

const node = this.svg.selectAll('g.node')
  .data(nodes, (d) => d.id || (d.id = ++this.i));

const nodeEnter = node.enter().append('g')
  .attr('class', 'node')
  .attr('transform', (d) => 'translate(' + source.y0 + ',' + source.x0 + 
   ')')
  .on('click', this.click);

nodeEnter.append('rect')
  .attr('width', 1e-6)
  .attr('height', 1e-6)
  .style('fill', function (d: any) {
    return d._children ? 'lightsteelblue' : '#fff';
  });

nodeEnter.append('text')
  .attr('dy', '.35em')
  .attr('x', -10)
  .text(function (d: any) { return d.data.name; });

const nodeUpdate = nodeEnter.merge(node);

nodeUpdate.transition()
  .duration(this.duration)
  .attr('transform', (d) => 'translate(' + d.y + ',' + d.x + ')');

const nodeHeight = 40,
  nodeWidth = 150;
nodeUpdate.select('rect')
  .attr('rx', 6)
  .attr('ry', 6)
  .attr('y', -(nodeHeight / 2))
  .attr('width', nodeWidth)
  .attr('height', nodeHeight)
  .style('fill', (d) => d._children ? 'lightsteelblue' : '#fff');


nodeUpdate.select('text')
  .style('fill-opacity', 1);

const nodeExit = node.exit().transition()
  .duration(this.duration)
  .attr('transform', (d) => 'translate(' + source.y + ',' + source.x + ')')
  .remove();

nodeExit.select('rect')
  .attr('width', 1e-6)
  .attr('height', 1e-6);

nodeExit.select('text')
  .style('fill-opacity', 1e-6);

const link = this.svg.selectAll('path.link')
  .data(links, (d) => d.id);

const linkEnter = link.enter().insert('path', 'g')
  .attr('class', 'link')
  .attr('d', (d) => {
    const o = { x: source.x0, y: source.y0 };
    return this.diagonal(o, o);
  });



link.transition()
  .duration(this.duration)
  .attr('stroke', 'black')
  .attr('d', this.diagonal);

link.exit().transition()
  .duration(this.duration)
  .attr('stroke', 'black')
  .attr('d', (d) => {
    const o = { x: source.x, y: source.y };
    return this.diagonal(o, o);
  })
  .remove();

 // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(this.duration)
      .attr('d', function(d){ return this.diagonal(d, d.parent) });

nodes.forEach((d) => {
  d.x0 = d.x;
  d.y0 = d.y;
});

}


click = (d) => {
 if (d.children) {
  d._children = d.children;
  d.children = null;
} else {
  d.children = d._children;
  d._children = null;
}
this.update(d);
}

diagonal(s, d) {
const path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

return path;
 }
}