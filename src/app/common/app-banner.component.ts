import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="container-fluid">
    <div class="row es-banner-row">
    <p>Test Environment!</p>
    </div>
  </div>
` ,

  // styleUrls: ['./app.component.scss']
})
export class AppBannerComponent {
  title = 'app banner';
}
