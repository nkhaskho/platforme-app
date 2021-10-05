import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFunctionsComponent } from './generic-functions.component';

describe('GenericFunctionsComponent', () => {
  let component: GenericFunctionsComponent;
  let fixture: ComponentFixture<GenericFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
