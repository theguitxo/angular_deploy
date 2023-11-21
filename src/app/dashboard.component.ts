import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'dashboard-component',
  template: `
    <h1>DASHBOARD</h1>
    <p>
      <button (click)="navigateHome()">Go to Home</button>
    </p>
  `,
  styles: [
    `
      * { font-family: Arial, Helvetica, sans-serif}
    `
  ],
  standalone: true
})
export class DashboardComponent {
  private router = inject(Router);

  navigateHome(): void {
    this.router.navigate(['/']);
  }
}
