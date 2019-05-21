import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialog } from './product.dialog';

describe('MaintenanceDialog', () => {
  let component: ProductDialog;
  let fixture: ComponentFixture<ProductDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
