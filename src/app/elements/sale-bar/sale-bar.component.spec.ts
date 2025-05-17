import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBarComponent } from './sale-bar.component';

describe('SaleBarComponent', () => {
  let component: SaleBarComponent;
  let fixture: ComponentFixture<SaleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
