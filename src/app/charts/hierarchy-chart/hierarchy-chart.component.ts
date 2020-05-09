import { AfterViewInit, Component, ElementRef, Host, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import DATA_CHART from '.././datacharts';

@Component({
  selector: 'hierarchy-chart',
  templateUrl: './hierarchy-chart.component.html',
  styleUrls: ['./hierarchy-chart.component.css']
})
export class HierarchyChartComponent implements AfterViewInit {
@ViewChild('svg') svgRef: ElementRef<SVGElement>;
  loading = false;

    private params = {
      mode: "",
  selector: "#svgChart",
  dataLoadUrl: "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/redesignedChartLongData.json",
  chartWidth: window.innerWidth-40,
  chartHeight: window.innerHeight - 40,
  funcs: {
    showMySelf: null,
    search: null,
    closeSearchBox: null,
    clearResult: null,
    findInTree: null,
    reflectResults: null,
    departmentClick: null,
    back: null,
    toggleFullScreen: null,
    locate:null
  },
  data: DATA_CHART,
  oldData:[],
  pristinaData:  JSON.stringify(DATA_CHART)
};

private attrs = {
    EXPAND_SYMBOL: '\uf067',
    COLLAPSE_SYMBOL: '\uf068',
    selector: this.params.selector,
    root: this.params.data,
    width: this.params.chartWidth,
    height: this.params.chartHeight,
    index: 0,
    nodePadding: 9,
    collapseCircleRadius: 7,
    nodeHeight: 80,
    nodeWidth: 210,
    duration: 750,
    rootNodeTopMargin: 20,
    minMaxZoomProportions: [0.05, 3],
    linkLineSize: 180,
    collapsibleFontSize: '10px',
    userIcon: '\uf007',
    nodeStroke: "#ccc",
    nodeStrokeWidth: '1px'
  };

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    svg:any = {};
    private line: d3Shape.Line<[number, number]>;
    private tree: any;
    private dynamic: any;
    private  zoomBehaviours: any;
    private  diagonal :any;
    private tooltip: any;

    
i = 0;
duration = 750;
root:any = {};

 

   constructor(@Host() private host: ElementRef<HTMLElement>) {}

/* --------- TODO --------*/
findmySelf(d) {
    if (d.isLoggedUser) {
      this.expandParents(d);
    } else if (d._children) {
      d._children.forEach(function(ch) {
        ch.parent = d;
        this.findmySelf(ch);
      })
    } else if (d.children) {
      d.children.forEach(function(ch) {
        ch.parent = d;
        this.findmySelf(ch);
      });
    };

  }

showMySelf() {
    /* collapse all and expand logged user nodes */
    if (!this.attrs.root.children) {
      if (!this.attrs.root.isLoggedUser) {
        this.attrs.root.children = this.attrs.root._children;
      }
    }
    if (this.attrs.root.children) {
      this.attrs.root.children.forEach(this.collapse);
      this.attrs.root.children.forEach(this.findmySelf);
    }

    this.update(this.attrs.root, {centerMySelf:true});
  }
 
searchUsers() {
   d3.selectAll('.user-search-box')
      .transition()
      .duration(250)
      .style('width', '350px')
}
closeSearchBox() {
  d3.selectAll('.user-search-box')
      .transition()
      .duration(250)
      .style('width', '0px')
      .each("end", function() {
        this.params.funcs.clearResult();
        this.clear('.search-input');
      });
}

findInTree(rootElement, searchText) {
  var result = [];
    // use regex to achieve case insensitive search and avoid string creation using toLowerCase method
    return this.recursivelyFindIn(rootElement, result , searchText);
}

recursivelyFindIn(user, result: Array<any>, searchText) {
    var regexSearchWord = new RegExp(searchText, "i");
      if (user.name.match(regexSearchWord) ||
        user.tags.match(regexSearchWord)) {
        result.push(user)
      }

      var childUsers = user.children ? user.children : user._children;
      if (childUsers) {
        childUsers.forEach(function(childUser) {
          return this.recursivelyFindIn(childUser, result,searchText)
        })
      }
    };

clearResult() {
    this.set('.result-list', '<div class="buffer" ></div>');
    this.set('.user-search-box .result-header', "RESULT");

  }
reflectResults(results) {
    var htmlStringArray = results.map(function(result) {
      var strVar = "";
      strVar += "         <div class=\"list-item\">";
      strVar += "          <a >";
      strVar += "            <div class=\"image-wrapper\">";
      strVar += "              <img class=\"image\" src=\"" + result.imageUrl + "\"\/>";
      strVar += "            <\/div>";
      strVar += "            <div class=\"description\">";
      strVar += "              <p class=\"name\">" + result.name + "<\/p>";
      strVar += "               <p class=\"position-name\">" + result.positionName + "<\/p>";
      strVar += "               <p class=\"area\">" + result.area + "<\/p>";
      strVar += "            <\/div>";
      strVar += "            <div class=\"buttons\">";
      strVar += "              <a target='_blank' href='"+result.profileUrl+"'><button class='btn-search-box btn-action'>View Profile<\/button><\/a>";
      strVar += "              <button class='btn-search-box btn-action btn-locate' onclick='params.funcs.locate("+result.uniqueIdentifier+")'>Locate <\/button>";
      strVar += "            <\/div>";
      strVar += "          <\/a>";
      strVar += "        <\/div>";

      return strVar;

    })

    var htmlString = htmlStringArray.join('');
    this.params.funcs.clearResult();

    var parentElement = this.get('.result-list');
    var old = parentElement.innerHTML;
    var newElement = htmlString + old;
    parentElement.innerHTML = newElement;
    this.set('.user-search-box .result-header', "RESULT - " + htmlStringArray.length);

}
 
back() {

    this.show(['.btn-action']);
    this.hide(['.customTooltip-wrapper', '.btn-action.btn-back', '.department-information'])
    this.clear(this.params.selector);

    this. params.mode = "full";
    this.params.data = this.deepClone(this.params.pristinaData)
    this.drawOrganizationChart(this.params);

  }


/* --------- TODO --------*/
 redraw() {
    //console.log("here", d3.event.translate, d3.event.scale);
    this.svg.attr("transform",
      "translate(" + d3.event.translate + ")" +
      " scale(" + d3.event.scale + ")");
  }

  expandAll() {
    this.expand(this.attrs.root);
    this.update(this.attrs.root, null);
  }
   
 

 listen() {
    // var input = get('.user-search-box .search-input');

    // input.addEventListener('input', function() {
    //   var value = input.value ? input.value.trim() : '';
    //   if (value.length < 3) {
    //     params.funcs.clearResult();
    //   } else {
    //     var searchResult = params.funcs.findInTree(params.data, value);
    //     params.funcs.reflectResults(searchResult);
    //   }

    // });
  }
  
drawOrganizationChart(params) {
  this.listen();

 this.dynamic = { nodeImageWidth: 80, nodeImageHeight: 50, nodeTextLeftMargin: 10, rootNodeLeftMargin: 150 ,nodePositionNameTopMargin: 50,nodeChildCountTopMargin: 50   };

  this.dynamic.nodeImageWidth = this.attrs.nodeHeight * 100 / 140;
  this.dynamic.nodeImageHeight = this.attrs.nodeHeight - 2 * this.attrs.nodePadding;
  this.dynamic.nodeTextLeftMargin = this.attrs.nodePadding * 2 + this.dynamic.nodeImageWidth;
  this.dynamic.rootNodeLeftMargin = this.attrs.width / 2;
  this.dynamic.nodePositionNameTopMargin = this.attrs.nodePadding + 8 + this.dynamic.nodeImageHeight / 4 * 1;
  this.dynamic.nodeChildCountTopMargin = this.attrs.nodePadding + 14 + this.dynamic.nodeImageHeight / 4 * 3;

  
  this.tree = d3.layout.tree().nodeSize([this.attrs.nodeWidth + 40, this.attrs.nodeHeight]);
   this.diagonal = d3.svg.diagonal()
    .projection(function(d) {
      debugger;
      return [d.x + this.attrs.nodeWidth / 2, d.y + this.attrs.nodeHeight / 2];
    });

 this.zoomBehaviours = d3.behavior
    .zoom()
    .scaleExtent(this.attrs.minMaxZoomProportions)
    .on("zoom", this.redraw());

    this.svg = d3.select(this.attrs.selector)
    .append("svg")
    .attr("width", this.attrs.width)
    .attr("height", this.attrs.height)
    .call(this.zoomBehaviours)
    .append("g")
    .attr("transform", "translate(" + this.attrs.width / 2 + "," + 20 + ")");


  this.zoomBehaviours.translate([this.dynamic.rootNodeLeftMargin, this.attrs.rootNodeTopMargin]);

  this.attrs.root.x0 = 0;
  this.attrs.root.y0 = this.dynamic.rootNodeLeftMargin;

  if (this.params.mode != 'department') {
    // adding unique values to each node recursively
    var uniq = 1;
    this.addPropertyRecursive('uniqueIdentifier', function(v) {

      return uniq++;
    }, this.attrs.root);

  }

  this.expand(this.attrs.root);
  if (this.attrs.root.children) {
    this.attrs.root.children.forEach(this.collapse);
  }

  this.update(this.attrs.root, null);

  d3.select(this.attrs.selector).style("height", this.attrs.height);

  this.tooltip = d3.select('body')
    .append('div')
    .attr('class', 'customTooltip-wrapper');
}


 
 /*****
  * FUNZIONI
  */

// update(source, param)
update(source, param: any) {

    // Compute the new tree layout.
    var nodes = this.tree.nodes(this.attrs.root)
      .reverse(),
      links = this.tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * this.attrs.linkLineSize;
    });

 // Update the nodes…
    var node = this.svg.selectAll("g.node")
      .data(nodes, function(d) {
        return d.id || (d.id = ++this.attrs.index);
      });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + source.x0 + "," + source.y0 + ")";
      })

    var nodeGroup = nodeEnter.append("g")
      .attr("class", "node-group")

nodeGroup.append("rect")
      .attr("width", this.attrs.nodeWidth)
      .attr("height", this.attrs.nodeHeight)
    .attr("data-node-group-id",function(d){
      return d.uniqueIdentifier;
    })
      .attr("class", function(d) {
        var res = "";
        if (d.isLoggedUser) res += 'nodeRepresentsCurrentUser ';
        res += d._children || d.children ? "nodeHasChildren" : "nodeDoesNotHaveChildren";
        return res;
      });

    var collapsiblesWrapper =
      nodeEnter.append('g')
      .attr('data-id', function(v) {
        return v.uniqueIdentifier;
      });

    var collapsibleRects = collapsiblesWrapper.append("rect")
      .attr('class', 'node-collapse-right-rect')
      .attr('height', this.attrs.collapseCircleRadius)
      .attr('fill', 'black')
      .attr('x', this.attrs.nodeWidth - this.attrs.collapseCircleRadius)
      .attr('y', this.attrs.nodeHeight - 7)
      .attr("width", function(d) {
        if (d.children || d._children) return this.attrs.collapseCircleRadius;
        return 0;
      })

    var collapsibles =
      collapsiblesWrapper.append("circle")
      .attr('class', 'node-collapse')
      .attr('cx', this.attrs.nodeWidth - this.attrs.collapseCircleRadius)
      .attr('cy', this.attrs.nodeHeight - 7)
      .attr("", this.setCollapsibleSymbolProperty);

    //hide collapse rect when node does not have children
    collapsibles.attr("r", function(d) {
        if (d.children || d._children) return this.attrs.collapseCircleRadius;
        return 0;
      })
      .attr("height", this.attrs.collapseCircleRadius)

    collapsiblesWrapper.append("text")
      .attr('class', 'text-collapse')
      .attr("x", this.attrs.nodeWidth - this.attrs.collapseCircleRadius)
      .attr('y', this.attrs.nodeHeight - 3)
      .attr('width', this.attrs.collapseCircleRadius)
      .attr('height', this.attrs.collapseCircleRadius)
      .style('font-size', this.attrs.collapsibleFontSize)
      .attr("text-anchor", "middle")
      .style('font-family', 'FontAwesome')
      .text(function(d) {
        return d.collapseText;
      })

    collapsiblesWrapper.on("click", this.click);



nodeGroup.append("text")
      .attr("x", this.dynamic.nodeTextLeftMargin)
      .attr("y", this.attrs.nodePadding + 10)
      .attr('class', 'emp-name')
      .attr("text-anchor", "left")
      .text(function(d) {
        return d.name.trim();
      })
      .call(this.wrap, this.attrs.nodeWidth);

    nodeGroup.append("text")
      .attr("x", this.dynamic.nodeTextLeftMargin)
      .attr("y", this.dynamic.nodePositionNameTopMargin)
      .attr('class', 'emp-position-name')
      .attr("dy", ".35em")
      .attr("text-anchor", "left")
      .text(function(d) {
         var position =  d.positionName.substring(0,27);
      if(position.length<d.positionName.length){
        position = position.substring(0,24)+'...'
      }
        return position;
      })

    nodeGroup.append("text")
      .attr("x", this.dynamic.nodeTextLeftMargin)
      .attr("y", this.attrs.nodePadding + 10 + this.dynamic.nodeImageHeight / 4 * 2)
      .attr('class', 'emp-area')
      .attr("dy", ".35em")
      .attr("text-anchor", "left")

    .text(function(d) {
      return d.area;
    })

    nodeGroup.append("text")
      .attr("x", this.dynamic.nodeTextLeftMargin)
      .attr("y", this.dynamic.nodeChildCountTopMargin)
      .attr('class', 'emp-count-icon')
      .attr("text-anchor", "left")
      .style('font-family', 'FontAwesome')
      .text(function(d) {
        if (d.children || d._children) return this.attrs.userIcon;
      });

    nodeGroup.append("text")
      .attr("x", this.dynamic.nodeTextLeftMargin + 13)
      .attr("y", this.dynamic.nodeChildCountTopMargin)
      .attr('class', 'emp-count')
      .attr("text-anchor", "left")

    .text(function(d) {
      if (d.children) return d.children.length;
      if (d._children) return d._children.length;
      return;
    })

nodeGroup.append("defs").append("svg:clipPath")
      .attr("id", "clip")
      .append("svg:rect")
      .attr("id", "clip-rect")
      .attr("rx", 3)
      .attr('x', this.attrs.nodePadding)
      .attr('y', 2 + this.attrs.nodePadding)
      .attr('width', this.dynamic.nodeImageWidth)
      .attr('fill', 'none')
      .attr('height', this.dynamic.nodeImageHeight - 4)

    nodeGroup.append("svg:image")
      .attr('y', 2 + this.attrs.nodePadding)
      .attr('x', this.attrs.nodePadding)
      .attr('preserveAspectRatio', 'none')
      .attr('width', this.dynamic.nodeImageWidth)
      .attr('height', this.dynamic.nodeImageHeight - 4)
      .attr('clip-path', "url(#clip)")
      .attr("xlink:href", function(v) {
        return v.imageUrl;
      })

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
      .duration(this.attrs.duration)
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      })

    //todo replace with attrs object
    nodeUpdate.select("rect")
      .attr("width", this.attrs.nodeWidth)
      .attr("height", this.attrs.nodeHeight)
      .attr('rx', 3)
      .attr("stroke", function(d){
       if(param && d.uniqueIdentifier== param.locate){
           return '#a1ceed'
        }
      return this.attrs.nodeStroke;
    })
      .attr('stroke-width', function(d){
       if(param && d.uniqueIdentifier== param.locate){
           return 6;
        }
      return this.attrs.nodeStrokeWidth})




      // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
      .duration( this.attrs.duration)
      .attr("transform", function(d) {
        return "translate(" + source.x + "," + source.y + ")";
      })
      .remove();

    nodeExit.select("rect")
      .attr("width",  this.attrs.nodeWidth)
      .attr("height",  this.attrs.nodeHeight)

    // Update the links…
    var link =  this.svg.selectAll("path.link")
      .data(links, function(d) {
        return d.target.id;
      });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("x",  this.attrs.nodeWidth / 2)
      .attr("y",  this.attrs.nodeHeight / 2)
      .attr("d", function(d) {
        var o = {
          x: source.x0,
          y: source.y0
        };
        return  this.diagonal({
          source: o,
          target: o
        });
      });

    // Transition links to their new position.
    link.transition()
      .duration( this.attrs.duration)
      .attr("d",  this.diagonal)
    ;

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
      .duration(this.attrs.duration)
      .attr("d", function(d) {
        var o = {
          x: source.x,
          y: source.y
        };
        return this.diagonal({
          source: o,
          target: o
        });
      })
      .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
    
    if(param && param.locate){
      var x;
      var y;

      nodes.forEach(function(d) {
        if (d.uniqueIdentifier == this.param.locate) {
          x = d.x;
          y = d.y;
        }
      });

      // normalize for width/height
      var new_x = (-x + (window.innerWidth / 2));
      var new_y = (-y + (window.innerHeight / 2));

      // move the main container g
      this.svg.attr("transform", "translate(" + new_x + "," + new_y + ")")
      this.zoomBehaviours.translate([new_x, new_y]);
      this.zoomBehaviours.scale(1);
    }

  if (param && param.centerMySelf) {
        var x;
        var y;

        nodes.forEach(function(d) {
          if (d.isLoggedUser) {
            x = d.x;
            y = d.y;
          }

        });

        // normalize for width/height
        var new_x = (-x + (window.innerWidth / 2));
        var new_y = (-y + (window.innerHeight / 2));

        // move the main container g
        this.svg.attr("transform", "translate(" + new_x + "," + new_y + ")")
        this.zoomBehaviours.translate([new_x, new_y]);
        this.zoomBehaviours.scale(1);
      }

    nodeGroup.on('click', this.tooltipHoverHandler);

    nodeGroup.on('dblclick', this.tooltipOutHandler);

    function equalToEventTarget() {
      return this == d3.event.target;
    }

    d3.select("body").on("click", function() {
      var outside = this.tooltip.filter(equalToEventTarget).empty();
      if (outside) {
        this.tooltip.style('opacity', '0').style('display', 'none');
      }
    });



}// END Update()

/*################  TOOLTIP  #############################*/
getTagsFromCommaSeparatedStrings(tags) {
      return tags.split(',').map(function(v) {
        return '<li><div class="tag">' + v + '</div></li>  '
      }).join('');
    }

    tooltipContent(item) {

      var strVar = "";

      strVar += "  <div class=\"customTooltip\">";
      strVar += "    <!--";
      strVar += "    <div class=\"tooltip-image-wrapper\"> <img width=\"300\" src=\"https:\/\/raw.githubusercontent.com\/bumbeishvili\/Assets\/master\/Projects\/D3\/Organization%20Chart\/cto.jpg\"> <\/div>";
      strVar += "-->";
      strVar += "    <div class=\"profile-image-wrapper\" style='background-image: url(" + item.imageUrl + ")'>";
      strVar += "    <\/div>";
      strVar += "    <div class=\"tooltip-hr\"><\/div>";
      strVar += "    <div class=\"tooltip-desc\">";
      strVar += "      <a class=\"name\" href='" + item.profileUrl + "' target=\"_blank\"> " + item.name + "<\/a>";
      strVar += "      <p class=\"position\">" + item.positionName + " <\/p>";
      strVar += "      <p class=\"area\">" + item.area + " <\/p>";
      strVar += "";
      strVar += "      <p class=\"office\">" + item.office + "<\/p>";
      strVar += "     <button class='" + (item.unit.type == 'business' ? " disabled " : "") + " btn btn-tooltip-department' onclick='params.funcs.departmentClick(" + JSON.stringify(item.unit) + ")'>" + item.unit.value + "</button>";
      strVar += "      <h4 class=\"tags-wrapper\">             <span class=\"title\"><i class=\"fa fa-tags\" aria-hidden=\"true\"><\/i>";
      strVar += "        ";
      strVar += "        <\/span>           <ul class=\"tags\">" + this.getTagsFromCommaSeparatedStrings(item.tags) + "<\/ul>         <\/h4> <\/div>";
      strVar += "    <div class=\"bottom-tooltip-hr\"><\/div>";
      strVar += "  <\/div>";
      strVar += "";

      return strVar;

    }


tooltipHoverHandler(d) {

      var content = this.tooltipContent(d);
      this.tooltip.html(content);

      this.tooltip.transition()
        .duration(200).style("opacity", "1").style('display', 'block');
      d3.select(this).attr('cursor', 'pointer').attr("stroke-width", 50);

      var y = d3.event.pageY;
      var x = d3.event.pageX;
      
      //restrict tooltip to fit in borders
      if (y < 220) {
        y += 220 - y;
        x += 130;
      }
      
      if(y>this.attrs.height-300){
        y-=300-(this.attrs.height-y);
      }

      this.tooltip.style('top', (y - 300) + 'px')
        .style('left', (x - 470) + 'px');
    }


tooltipOutHandler() {
      this.tooltip.transition()
        .duration(200)
        .style('opacity', '0').style('display', 'none');
      d3.select(this).attr("stroke-width", 5);

    }

/************************************* */
/************************************* */
/************************************* */
/************************************* */


  collapse(d) {
      if (d._children) {
        d._children.forEach(this.collapse);
      }
      if (d.children) {
        d._children = d.children;
        d._children.forEach(this.collapse);
        d.children = null;
      }

      if (d._children) {
        // if node has children and it's collapsed, then  display +
        this.setToggleSymbol(d, this.attrs.EXPAND_SYMBOL);
      }
    }

expand(d) {
    if (d.children) {
      d.children.forEach(this.expand);
    }

    if (d._children) {
      d.children = d._children;
      d.children.forEach(this.expand);
      d._children = null;
    }

    if (d.children) {
      // if node has children and it's expanded, then  display -
      this.setToggleSymbol(d, this.attrs.COLLAPSE_SYMBOL);
    }
  }

setToggleSymbol(d, symbol) {
    d.collapseText = symbol;
    d3.select("*[data-id='" + d.uniqueIdentifier + "']").select('text').text(symbol);
  }

  addPropertyRecursive(propertyName, propertyValueFunction, element) {
    if (element[propertyName]) {
      element[propertyName] = element[propertyName] + ' ' + propertyValueFunction(element);
    } else {
      element[propertyName] = propertyValueFunction(element);
    }
    if (element.children) {
      element.children.forEach(function(v) {
        this.addPropertyRecursive(propertyName, propertyValueFunction, v)
      })
    }
    if (element._children) {
      element._children.forEach(function(v) {
        this.addPropertyRecursive(propertyName, propertyValueFunction, v)
      })
    }
  }


setCollapsibleSymbolProperty(d) {
    if (d._children) {
      d.collapseText = this.attrs.EXPAND_SYMBOL;
    } else if (d.children) {
      d.collapseText = this.attrs.COLLAPSE_SYMBOL;
    }
  }

expandParents(d) {
    while (d.parent) {
      d = d.parent;
      if (!d.children) {
        d.children = d._children;
        d._children = null;
        this.setToggleSymbol(d, this.attrs.COLLAPSE_SYMBOL);
      }

    }
  }

  click(d) {

     d3.select(this).select("text").text(function(dv) {

      if (dv.collapseText == this.attrs.EXPAND_SYMBOL) {
        dv.collapseText = this.attrs.COLLAPSE_SYMBOL
      } else {
        if (dv.children) {
          dv.collapseText = this.attrs.EXPAND_SYMBOL
        }
      }
      return dv.collapseText;

    })

    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d,null);

  }

  toggleFullScreen() {
 //--------------------------------------------------------
 //--------------------------------------------------------
 //       COMPLETARE
 //--------------------------------------------------------
 //--------------------------------------------------------

    // if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    //   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    //   if (document.documentElement.requestFullScreen) {
    //     document.documentElement.requestFullScreen();
    //   } else if (document.documentElement.mozRequestFullScreen) {
    //     document.documentElement.mozRequestFullScreen();
    //   } else if (document.documentElement.webkitRequestFullScreen) {
    //     document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    //   }
    //   d3.select(params.selector + ' svg').attr('width', screen.width).attr('height', screen.height);
    // } else {
    //   if (document.cancelFullScreen) {
    //     document.cancelFullScreen();
    //   } else if (document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //   } else if (document.webkitCancelFullScreen) {
    //     document.webkitCancelFullScreen();
    //   }
    //   d3.select(params.selector + ' svg').attr('width', params.chartWidth).attr('height', params.chartHeight);
    }
locateRecursive(d,id) {
    if (d.uniqueIdentifier == id) {
      this.expandParents(d);
    } else if (d._children) {
      d._children.forEach(function(ch) {
        ch.parent = d;
        this.locateRecursive(ch,id);
      })
    } else if (d.children) {
      d.children.forEach(function(ch) {
        ch.parent = d;
        this.locateRecursive(ch,id);
      });
    };

  }

locate(id){
     /* collapse all and expand logged user nodes */
    if (!this.attrs.root.children) {
      if (!this.attrs.root.uniqueIdentifier == id) {
        this.attrs.root.children = this.attrs.root._children;
      }
    }
    if (this.attrs.root.children) {
      this.attrs.root.children.forEach(this.collapse);
      this.attrs.root.children.forEach(function(ch){
        this.locateRecursive(ch,id)
      });
    }

    this.update(this.attrs.root, {locate:id});
  }

deepClone(item) {
    return JSON.parse(JSON.stringify(item));
  }

  show(selectors) {
    this.display(selectors, 'initial')
  }

clear(selector) {
    this.set(selector, '');
  }

  hide(selectors) {
    this.display(selectors, 'none')
  }

  display(selectors, displayProp) {
    selectors.forEach(function(selector) {
      var elements = this.getAll(selector);
      elements.forEach(function(element) {
        element.style.display = displayProp;
      })
    });
  }

  set(selector, value) {
    var elements = this.getAll(selector);
    elements.forEach(function(element) {
      element.innerHTML = value;
      element.value = value;
    })
  }

  get(selector) {
    return document.querySelector(selector);
  }

  getAll(selector) {
    return document.querySelectorAll(selector);
  }
  /***** */


// #############################   Function Area #######################
wrap(text, width) {

    text.each(function() {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x = text.attr("x"),
        y = text.attr("y"),
        dy = 0, //parseFloat(text.attr("dy")),
        tspan = text.text(null)
        .append("tspan")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }

ddPropertyRecursive(propertyName, propertyValueFunction, element) {
    if (element[propertyName]) {
      element[propertyName] = element[propertyName] + ' ' + propertyValueFunction(element);
    } else {
      element[propertyName] = propertyValueFunction(element);
    }
    if (element.children) {
      element.children.forEach(function(v) {
        this.addPropertyRecursive(propertyName, propertyValueFunction, v)
      })
    }
    if (element._children) {
      element._children.forEach(function(v) {
        this.addPropertyRecursive(propertyName, propertyValueFunction, v)
      })
    }
  }

departmentClick(item) {
  //************************************************** */
  //************************************************** */
  //************************************************** */
  //  this.hide(['.customTooltip-wrapper']);

    if (item.type == 'department' && this.params.mode != 'department') {
      //find third level department head user
      var found = false;
      var secondLevelChildren = JSON.parse(this.params.pristinaData).children;
      parentLoop:
        for (var i = 0; i < secondLevelChildren.length; i++) {
          var secondLevelChild = secondLevelChildren[i];
          var thirdLevelChildren = secondLevelChild.children ? secondLevelChild.children : secondLevelChild._children;

          for (var j = 0; j < thirdLevelChildren.length; j++) {
            var thirdLevelChild = thirdLevelChildren[j];
            if (thirdLevelChild.unit.value.trim() == item.value.trim()) {
              this.clear(this.params.selector);

              this.hide(['.btn-action']);
              this.show(['.btn-action.btn-back', '.btn-action.btn-fullscreen', '.department-information']);
              this.set('.dept-name', item.value);
              
              this.set('.dept-emp-count', "Employees Quantity - " + this.getEmployeesCount(thirdLevelChild));
              this.set('.dept-description', thirdLevelChild.unit.desc);

              this.params.oldData = this.params.data;

              this.params.data = this.deepClone(thirdLevelChild);
              found = true;
              break parentLoop;
            }
          }
        }
      if (found) {
        this.params.mode = "department";
        this.params.funcs.closeSearchBox();
        this.drawOrganizationChart(this.params);
    
      }

    }
  }


getEmployeesCount(node) {
    var count = 1;
    countChilds(node);
    return count;

    function countChilds(node) {
      var childs = node.children ? node.children : node._children;
      if (childs) {
        childs.forEach(function(v) {
          count++;
          countChilds(v);
        })
      }
    }
  }


// #############################   Function Area #######################

  ngAfterViewInit() {
    const data = [
      this.generateData(20, 10),
      this.generateData(20, 10)
    ];
    const { width } = this.host.nativeElement.getBoundingClientRect();
    const height = width / (16/9);
    const margin = Math.min(Math.max(width * 0.1, 20), 50);

    const svg = d3.select(this.svgRef.nativeElement)
    this.drawChart(svg, width, height, margin, data);
    fromEvent(window, 'resize')
      .pipe(
        tap(() => this.loading = true),
        debounceTime(300)
      ).subscribe(() => {
        const { width } = this.host.nativeElement.getBoundingClientRect();
        const height = width / (16/9);
        const margin = Math.min(Math.max(width * 0.1, 20), 50);
        this.drawChart(svg, width, height, margin, data);
        this.loading = false;
      });
      console.log('createChart START');
      const createChart = () => {
            var margin = { top: 20, right: 120, bottom: 20, left: 120 },
                width = 1560 - margin.right - margin.left,
                height = 1000 - margin.top - margin.bottom;

            this.tree = d3.layout.tree()
                .size([height, width]);

            const element = this.svgRef.nativeElement;

            this.diagonal = d3.svg.diagonal().projection((d) => { return [d.y, d.x]; });

            this.svg = d3.select(element).append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            this.root = this.params.data[0];
            this.root.x0 = height / 2;
            this.root.y0 = 0;

            hideChildren(this.root);

            d3.select(self.frameElement).style("height", "1000px");
        };


        const update = (source) => {

            // Compute the new tree layout.
            var nodes = this.tree.nodes(this.root).reverse(),
                links = this.tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach((d) => { d.y = d.depth * 180; });

            // Update the nodes…
            var node = this.svg.selectAll("g.node")
                .data(nodes, (d) => { return d.id || (d.id = ++this.i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", (d) => { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                .on("click", click);

            nodeEnter.append("circle")
                .attr("r", 1e-6)
                .style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; });

            nodeEnter.append("text")
                .attr("x", (d) => { return d.children || d._children ? -13 : 13; })
                .attr("dy", ".35em")
                .attr("text-anchor", (d) => { return d.children || d._children ? "end" : "start"; })
                .text((d) => { return d.name; })
                .style("fill-opacity", 1e-6);

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(this.duration)
                .attr("transform", (d) => { return "translate(" + d.y + "," + d.x + ")"; });

            nodeUpdate.select("circle")
                .attr("r", 10)
                .style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(this.duration)
                .attr("transform", (d) => { return "translate(" + source.y + "," + source.x + ")"; })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links…
            var link = this.svg.selectAll("path.link")
                .data(links, (d) => { return d.target.id; });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", (d) => {
                    var o = { x: source.x0, y: source.y0 };
                    return this.diagonal({ source: o, target: o });
                });

            // Transition links to their new position.
            link.transition()
                .duration(this.duration)
                .attr("d", this.diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(this.duration)
                .attr("d", (d) => {
                    var o = { x: source.x, y: source.y };
                    return this.diagonal({ source: o, target: o });
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach((d) => {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            console.log('end creating chart');
        };


        const hideChildren = (node) => {
            if (node.children) {
                node._children = node.children;
                node.children = null;
                node._children.forEach((a) => { hideChildren(a); });
            }
        };

        const click = (d) => {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }

            update(d);
        };

        createChart();
        this.root.update = update;
        update(this.root);
    }

  private drawChart(svg: any, width: number, height: number, margin: number, data: any[]) {
    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;
    const n = data[0].length;
    const maxValue = this.getMaxValue(data);

    svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMid');

    svg.selectAll('g').remove();
    
    const xScale = d3.scaleLinear()
      .domain([0, n-1])
      .range([0, chartWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([chartHeight, 0]);

    const line = d3.line()
      .defined(d => !isNaN(d.data))
      .x((d, i) => xScale(i))
      .y(d => yScale(d.data))
      .curve(d3.curveMonotoneX)

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(${margin}, ${chartHeight + margin})`)
      .call(d3.axisBottom(xScale).ticks(Math.min(Math.floor(chartWidth / 25), n)));

    svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', `translate(${margin}, ${margin})`)
      .call(d3.axisLeft(yScale).ticks(Math.min(Math.floor(chartHeight / 15), maxValue)));

    const colors = ['steelblue', 'orange'];

    data.forEach((serie, i) => {
      svg
        .append('g')
        .attr('transform', `translate(${margin}, ${margin})`)
        .append('path')
        .datum(serie)
        .attr('fill', 'none')
        .attr('stroke', colors[i])
        .attr('stroke-width', 3)
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('class', 'line') 
        .attr('d', line)
    });
  }

  private generateData(n, maxValue) {
    return new Array(n).fill(null).map(() => ({data: Math.random() * maxValue }))
  }

  private getMaxValue(series: {data: number}[][]): number {
    return series.reduce((serieMax, serie) => {
      return Math.max(serieMax, serie.reduce((max, value) => Math.max(max, value.data), -Infinity))
    }, -Infinity);
  }
}