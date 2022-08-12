import { Component, OnInit } from '@angular/core';

import { Sound } from '../box/sound-box.component';

@Component({
    selector: 'app-box-matrix',
    templateUrl: './box-matrix.component.html',
    styleUrls: ['./box-matrix.component.scss']
  })
  export class BoxMatrixComponent implements OnInit {

    constructor() { }

    ngOnInit() {   
    }

    public getAllBoxes(): Sound[] {
        let boxes=[];
        for (var snd in Sound) {
            let enumVal = Number(snd)
            if (!isNaN(enumVal)) {
                boxes.push(enumVal);
          }    
        }
    
        return boxes;
      }
  }