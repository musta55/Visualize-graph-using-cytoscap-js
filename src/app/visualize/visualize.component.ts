import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as cytoscape from 'cytoscape';
import * as panzoom from 'cytoscape';
import * as navigator from 'cytoscape';




@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {
  cy: any;

  ngOnInit() {
    // Initialize cytoscape instance
    this.cy = cytoscape({
      container: document.getElementById('cy'),
  
      // Graph data
      elements: {
        nodes: [
          { data: { id: 'a' } },
          { data: { id: 'b' } },
          { data: { id: 'c' } },
          { data: { id: 'd' } },
          { data: { id: 'e' } },
        ],
        edges: [
          { data: { source: 'a', target: 'b' } },
          { data: { source: 'b', target: 'c' } },
          { data: { source: 'c', target: 'd' } },
          { data: { source: 'd', target: 'e' } },
          { data: { source: 'e', target: 'a' } },
        ],
      },
  
      // Graph style
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)',
          }
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
          }
        },
      ],
  
      // Graph layout
      layout: {
        name: 'circle',
      },
    });
  console.log("Cholse?")
    // // Add panzoom and navigator extensions
    panzoom(this.cy);
    navigator(this.cy);
  }
  }

