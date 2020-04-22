import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIBMIComponent } from './view-ibmi.component';

describe('ViewIBMIComponent', () => {
  let component: ViewIBMIComponent;
  let fixture: ComponentFixture<ViewIBMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIBMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIBMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
