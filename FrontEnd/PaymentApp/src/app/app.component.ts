import { Component } from '@angular/core';
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";

@Component({
  selector: 'app-root',
  imports: [PaymentDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaymentApp';
}
