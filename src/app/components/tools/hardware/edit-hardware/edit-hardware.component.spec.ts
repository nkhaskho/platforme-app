import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardwareComponent } from './edit-hardware.component';

describe('EditHardwareComponent', () => {
  let component: EditHardwareComponent;
  let fixture: ComponentFixture<EditHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHardwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
