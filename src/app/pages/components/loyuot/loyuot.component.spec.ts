import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyuotComponent } from './loyuot.component';

describe('LoyuotComponent', () => {
  let component: LoyuotComponent;
  let fixture: ComponentFixture<LoyuotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyuotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
