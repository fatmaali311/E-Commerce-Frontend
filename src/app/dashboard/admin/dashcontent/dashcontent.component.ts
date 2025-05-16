import { Component } from '@angular/core';
import { KpiCardsComponent } from '../kpi-cards/kpi-cards.component';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-dashcontent',
  imports: [KpiCardsComponent,ChartsComponent],
  templateUrl: './dashcontent.component.html',
  styleUrl: './dashcontent.component.css'
})
export class DashcontentComponent {

}
