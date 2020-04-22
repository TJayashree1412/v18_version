import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIBMIComponent } from './edit-ibmi.component';

describe('EditIBMIComponent', () => {
  let component: EditIBMIComponent;
  let fixture: ComponentFixture<EditIBMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIBMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIBMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
