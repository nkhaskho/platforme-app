import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFunctionComponent } from './generic-function.component';

describe('GenericFunctionComponent', () => {
  let component: GenericFunctionComponent;
  let fixture: ComponentFixture<GenericFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
