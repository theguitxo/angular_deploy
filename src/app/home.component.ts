import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'home-component',
  template: `
    <h1>APP HOME</h1>
    <p>
      <button (click)="navigateDashboard()">Go to Dashboard</button>
    </p>
  `,
  styles: [
    `
      * { font-family: Arial, Helvetica, sans-serif}
    `
  ],
  standalone: true
})
export class HomeComponent {
  private router = inject(Router);

  navigateDashboard(): void {
    this.router.navigate(['dashboard']);
  }
}
