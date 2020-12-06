import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
  <div class="container-fluid es-container">
     <div class="row">
        <div class="col-md-3">
        <button class="btn btn-primary es-btn-size" (click) = "gotoBrands()" >Brands</button>

        </div>

        <div class="col-md-3">
        <button class="btn btn-primary es-btn-size">Categories</button>

        </div>

        <div class="col-md-3">
        <button class="btn btn-primary es-btn-size">Coupons</button>

        </div>

        <div class="col-md-3">
        <button class="btn btn-primary es-btn-size">Governments</button>

        </div>

     </div>

     <div class="row">
     <div class="col-md-3">
     <button class="btn btn-primary es-btn-size">Products</button>

     </div>

     <div class="col-md-3">
        <button class="btn btn-primary es-btn-size">Image Sliders</button>

        </div>

        <div class="col-md-3">
        <button class="btn btn-primary es-btn-size">Zones</button>

        </div>

        <div class="col-md-3">
        <button class="btn btn-primary es-btn-size">Carts</button>

        </div>
    
    </div>

    <div class="row">
    <div class="col-md-3">
    <button class="btn btn-primary es-btn-size">Notifications</button>

    </div>

    </div>

  </div>

  `,

  // styleUrls: ['./app.component.scss']
})
export class DashboardComponent {
    constructor(private router: Router) { }

    gotoBrands($myParam: string = ''): void {
        const navigationDetails: string[] = ['/login'];
        if ($myParam.length) {
            navigationDetails.push($myParam);
        }
        this.router.navigate(navigationDetails);
    }
}
