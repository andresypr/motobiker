import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDialog } from './maintenance.dialog';

describe('MaintenanceDialog', () => {
  let component: MaintenanceDialog;
  let fixture: ComponentFixture<MaintenanceDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
