import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSellersComponent } from './manage-sellers.component';

describe('ManageSellersComponent', () => {
  let component: ManageSellersComponent;
  let fixture: ComponentFixture<ManageSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSellersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
