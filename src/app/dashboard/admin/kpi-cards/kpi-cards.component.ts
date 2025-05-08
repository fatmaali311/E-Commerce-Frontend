import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-kpi-cards',
  imports: [CardModule],
  templateUrl: './kpi-cards.component.html',
  styleUrl: './kpi-cards.component.css',
  encapsulation: ViewEncapsulation.None
})
export class KpiCardsComponent {

}
