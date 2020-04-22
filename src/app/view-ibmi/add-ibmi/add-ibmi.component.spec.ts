import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIBMIComponent } from './add-ibmi.component';

describe('AddIBMIComponent', () => {
  let component: AddIBMIComponent;
  let fixture: ComponentFixture<AddIBMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIBMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIBMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
