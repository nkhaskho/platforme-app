import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenericFunctionComponent } from './edit-generic-function.component';

describe('EditGenericFunctionComponent', () => {
  let component: EditGenericFunctionComponent;
  let fixture: ComponentFixture<EditGenericFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGenericFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenericFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
