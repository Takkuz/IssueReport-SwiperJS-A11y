import { Component } from '@angular/core';

import SwiperCore, { A11y, Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  A11y
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  swiperConfig: SwiperOptions = {
    a11y: { enabled: true },
    pagination: true
  }
}
