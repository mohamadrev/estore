import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- footer -->
    <footer class="footer es-footer">
    <div class="container-fluid">
    <div class="content has-text-centered es-text">
      <p>
      EStore
        <!-- Made with <3 by <a href="https://twitter.com/chrisoncode">Chris from Scotch</a> -->
      </p>
    </div>
    </div>
    </footer>

` ,

  // styleUrls: ['./app.component.scss']
})
export class AppFooterComponent {
  title = 'app header';
}
