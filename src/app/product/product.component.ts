import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class ProductComponent implements OnInit {
  flipped: boolean = false;
  services = [];
  service: any;
  id: any;

  constructor(private homeService: ServiceService) { }

  ngOnInit(): void {
    this.servicesResult();
  }
  servicesResult() {
    this.homeService.getServices().subscribe((response: any) => {
      this.service = response.data;
      console.log(this.service);
      // console.log(this.service.id);
      var n = this.service.length;
      // console.log(n);
      return n;

      // this.flipIt(this.service.id);
    });
  }
}
