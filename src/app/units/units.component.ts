import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  param;
  h1;
  constructor(private route: ActivatedRoute) { }

  getUnit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      switch (this.param) {
        case 'about':
          console.log("1-about");
          break;

        case 'auditfirm':
          console.log("2-auditfirm");
          break;
      
          break;
        case 'banks':
          console.log("3-banks");
          break;
      
          break;
        case 'gov':
          console.log("4-gov");
          break;
      
          break;
        case 'petrolum':
          console.log("5-petrolum");
          break;      
      
          break;
        case 'multinational':
          console.log("6-multinational");
          break;
      
          break;
        case 'insurance':
          console.log("7-insurance");
          break;
      
          break;
        case 'companies':
          console.log("8-companies");
          break;
      
          break;
        case 'groups':
          console.log("9-Groups");
          break;
      
        default:
          console.log('not Found');
          break;
      }
  });
  }

  ngOnInit() {
    this.getUnit();
    this.setWidth();
    window.addEventListener('resize', () => {
      this.setWidth();
    });
  }

  // to set the width of lines based on the heading width
  setWidth() {
    setTimeout(e => {
      this.h1 = document.getElementById('h1').offsetWidth;
      let hr1 = document.getElementById('hr-1');
      let hr2 = document.getElementById('hr-2');

      hr1.style.width = this.h1 + 15 + 'px';
      hr2.style.width = this.h1 + 45 + 'px';
    }, 0);
  }
}
