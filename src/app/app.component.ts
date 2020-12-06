import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estore';
}
