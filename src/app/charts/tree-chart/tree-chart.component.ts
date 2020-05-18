import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
 
 
@Component({
  selector: 'tree-chart',
  templateUrl: './tree-chart.component.html',
  styleUrls: ['./tree-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeChartComponent implements OnInit {
margin = { top: 40, right: 90, bottom: 50, left: 90 };
width = 660  - this.margin.right - this.margin.left;
height = 500 - this.margin.top - this.margin.bottom;

treemap  = d3.tree().size([this.height, this.width]);
 
i = 0;
duration = 750;
root;
svg;
g;
link;
 nodes;
 orientations = {
      "top-to-bottom": {
        size: [this.width, this.height],
        x: function(d) { return d.x; },
        y: function(d) { return d.y; }
      }
    };
   

_treeData =   {
 	"name": "Root_Level",
 	"value": 75,
 	"type": "black",
 	"level": "red",
 	"male": 51,
 	"female": 24,
               "id": 0,
 	"children": [{
 			"name": "Operation",
 			"value": 40,
 			"type": "black",
 			"level": "green",
 			"male": 23,
 			"female": 17,
               "id": 0,
 			"children": [{
 					"name": "Top Management",
 					"value": 3,
 					"type": "grey",
 					"level": "red",
 					"male": 3,
 					"female": 0,
               "id": 0,
 					"children": [{
 							"name": "Operation Manager",
 							"value": 1,
 							"type": "steelblue",
 							"level": "orange",
 							"male": 1,
 							"female": 0,
               "id": 0
 						},
 						{
 							"name": "Account Strategist",
 							"value": 1,
 							"type": "steelblue",
 							"level": "red",
 							"male": 1,
 							"female": 0,
               "id": 0
 						},

 					]
 				},
 				{
 					"name": "Junior Level",
 					"value": 23,
 					"type": "grey",
 					"level": "green",
 					"male": 10,
 					"female": 13,
               "id": 0,
 					"children": [{
 							"name": "Analyst",
 							"value": 10,
 							"type": "steelblue",
 							"level": "orange",
 							"male": 7,
 							"female": 3,
               "id": 0,
 							"children": [{
 									"name": "Top Management",
 									"value": 2,
 									"type": "black",
 									"level": "red",
 									"male": 2,
 									"female": 0,
               "id": 0,
 									"children": [{
 											"name": "Director",
 											"value": 1,
 											"type": "black",
 											"level": "red",
 											"male": 1,
 											"female": 0,
               "id": 0
 										},
 										{
 											"name": "HR Manager",
 											"value": 1,
 											"type": "black",
 											"level": "red",
 											"male": 1,
 											"female": 0,
               "id": 0
 										}
 									]
 								},
 								{
 									"name": "Middle Management",
 									"value": 1,
 									"type": "black",
 									"level": "red",
 									"male": 0,
 									"female": 1,
 									"children": [{
 										"name": "Front Office Executive",
 										"value": 1,
 										"type": "black",
 										"level": "red",
 										"male": 0,
 										"female": 1,
               "id": 0
 									}]
 								}
 							]

 						},
 						{
 							"name": "Intern",
 							"value": 5,
 							"type": "steelblue",
 							"level": "red",
 							"male": 0,
 							"female": 5,
               "id": 0
 						},

 					]
 				},

 			]
 		},
 		{
 			"name": "Technology",
 			"value": 32,
 			"type": "black",
 			"level": "red",
 			"male": 26,
 			"female": 6,
 			"children": [{
 					"name": "Top Management",
 					"value": 6,
 					"type": "grey",
 					"level": "red",
 					"male": 6,
 					"female": 0,
 					"children": [{
 							"name": "Engineering Manager",
 							"value": 1,
 							"type": "grey",
 							"level": "red",
 							"male": 1,
 							"female": 0,
               "id": 0
 						},
 						{
 							"name": "Product Manager",
 							"value": 1,
 							"type": "grey",
 							"level": "red",
 							"male": 1,
 							"female": 0,
               "id": 0
 						},

 					]
 				},
 				{
 					"name": "Junior Level",
 					"value": 21,
 					"type": "grey",
 					"level": "red",
 					"male": 16,
 					"female": 5,
 					"children": [{
 							"name": "System Administrator",
 							"value": 1,
 							"type": "grey",
 							"level": "red",
 							"male": 1,
 							"female": 0,
               "id": 0
 						},
 						{
 							"name": "Support Engineer",
 							"value": 1,
 							"type": "grey",
 							"level": "red",
 							"male": 1,
 							"female": 0,
               "id": 0
 						},

 					]
 				},

 			]
 		},

 	]
 };

constructor() { }

ngOnInit() {
 this.loadChart();
}

loadChart() {
  
 // declares a tree layout and assigns the size
this.treemap = d3.tree()
    .size([this.width, this.height]);

//  assigns the data to a hierarchy using parent-child relationships
this.root = d3.hierarchy(this._treeData, (d) => { return d.children; });
this.root = this.treemap(this.root) ;
 this.root.x0 = this.height /2;
 this.root.y0 = 0;

// maps the node data to the tree layout


// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
this.svg = d3.select("body") 
    .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    this.g = this.svg.append("g")
      .attr("transform",
            "translate(" + this.margin.left + "," + this.margin.top + ")");

// adds the links between the nodes
this.link = this.g.selectAll(".link")
    .data( this.root.descendants().slice(1))
  .enter().append("path")
    .attr("class", "link")
      //  .style("stroke", d => {
      //             return d.data.type === "black" ? "blue" : "steelblue"
      //             })
    .attr("d", d => this.diagonal(d)
       );
       

// adds each node as a group
this.nodes = this.g.selectAll(".node")
    .data(this.root.descendants())
  .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
        (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { 
      return "translate(" + d.y + "," + d.x + ")"; });

 
 
// adds the circle to the node
this.nodes.append("circle")
  .attr("r", 10)
  //  .style("stroke", d => {
  //                 return d.data.type === "black" ? "steelblue" : "blue"
  //                 })
  ;

// adds the text to the node
this.nodes.append("text")
  .attr("dy", ".35em")
  .attr("y", function(d) { return d.children ? -20 : 20; })
   .style("stroke", d => {
                   return  "black"; })
  .style("text-anchor", "middle")
  .text(function(d) { return d.data.name; });
   console.log(this.root); 
 
  this.root.children.forEach(c => this.collapse(c)); 
   
  this.update(this.root);
} // end loadChart


 click = (d) => {
   console.log('click');
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    this.update(d);
  }
 
update(source) {

this.nodes = this.treemap.nodes(this.root);
   
//   // Normalize for fixed-depth.
   this.nodes.forEach(function(d){ d.x = d.depth * 100});
  console.log(this.nodes);
  // ****************** Nodes section ***************************
 // 
  // Update the nodes...
  var node = this.svg.selectAll('g.node').data(this.nodes);
      //.data(this.nodes, d => {             
      //  return d.id || (d.id = ++this.i); });

  // // // Enter any new modes at the parent's previous position.
   var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", d => {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', d => this.toggle(d));

  // // // // Add Circle for the nodes
  nodeEnter.append("circle")
                   .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  // // // Add labels for the nodes
  nodeEnter.append("text")
                     .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // // // UPDATE
  var nodeUpdate = node.transition()
      .duration(this.duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  // // // // Transition to the proper position for the node
  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) {
            if (d.class === "found") {
                return "#ff4136"; //red
            } else if (d._children) {
                return "lightsteelblue";
            } else {
                return "#fff";
            }
        })
        .style("stroke", function(d) {
            if (d.class === "found") {
                return "#ff4136"; //red
            }
        });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

   // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(this.duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = this.svg.selectAll("path.link")
      .data(this.link, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return this.diagonal(o);
      });

  // Transition links to their new position.
  link.transition()
      .duration(this.duration)
      .attr("d", this.diagonal)
      .style("stroke", function(d) {
            if (d.target.class === "found") {
                return "#ff4136";
            }
        });

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(this.duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return this.diagonal(o);
      })
      .remove();

  // Stash the old positions for transition.
  this.nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

}  // end Update



clearAll(d){
    d.class = "";
    if (d.children)
        d.children.forEach(d => this.clearAll(d));
    else if (d._children)
        d._children.forEach(d => this.clearAll(d));
}

 collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(d => this.collapse(d));
      d.children = null;
    }
  }

collapseAllNotFound(d) {
    if (d.children) {
    	if (d.class !== "found") {
        	d._children = d.children;
        	d._children.forEach(d => this.collapseAllNotFound(d));
        	d.children = null;
	} else 
        	d.children.forEach(d => this.collapseAllNotFound(d));
    }
}
expandAll(d)  {
    if (d._children) {
        d.children = d._children;
        d.children.forEach(d => this.expandAll(d));
        d._children = null;
    } else if (d.children)
        d.children.forEach(d => this.expandAll(d));
}

toggle = (d) => {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  this.clearAll(this.root);
  this.update(d);
  //$("#searchName").select2("val", ""); resettare il cerca
}



diagonal(d) {
      const path = 
      "M" + d.y + "," + d.x 
         + "C" + (d.y + d.parent.y) / 2 + "," + d.x 
         + " " + (d.y + d.parent.y) / 2 + "," +  d.parent.x
         + " " + d.parent.y + "," + d.parent.x 

//  "M" +  d.x + "," + d.y
//          + "C" +  d.x + "," +  (d.y + d.parent.y) / 2
//          + " " + d.parent.x  + "," +  (d.y + d.parent.y) / 2
//          + " " +  d.parent.x + "," +  d.parent.y

      // `M ${s.y} ${s.x}
      //             C ${(s.y + d.y) / 2} ${s.x},
      //               ${(s.y + d.y) / 2} ${d.x},
      //               ${d.y} ${d.x}`;

      return path;
 }
}