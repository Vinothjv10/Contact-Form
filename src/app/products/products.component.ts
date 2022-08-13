import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { service } from '../honeycomb/honeycomb.module';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
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
export class ProductsComponent implements OnInit {
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

  flipIt(e: any) {
    console.log(e);

    if (this.service[e]) {
      // console.log(this.service[e].rotate)
      // this.service[e] = this.flipped;
      // this.service[e] = document.getElementById('child')?.style.transform.
    }

    // if (e < this.service.length) {
    //   this.service[e].flipped = !this.service[e].flipped;
    //   console.log(this.service[e].flipped);
    //   // console.log(this.service[e].content)
    // }

    // this.flipped = !this.flipped;

    console.log(this.flipped);

  }
  flipOut(e: any) {
    if (this.service[e]) {
      // this.service[e] = !this.flipped;
    }

    // this.flipped = !this.flipped;

    // console.log(this.flipped);

  }
}
