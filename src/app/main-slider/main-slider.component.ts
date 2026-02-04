import { Component,OnInit  } from '@angular/core';

declare let $:any
@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit  {
  ngOnInit() {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      dots:true,
      loop: true,
      margin: 10,
      nav: false,
      autoplay:true,
      autoplayTimeout:1000,
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 1
        }
      }
    });
  }

}
