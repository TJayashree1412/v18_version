import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnboardRecordComponent } from './view-onboard-record.component';

describe('ViewOnboardRecordComponent', () => {
  let component: ViewOnboardRecordComponent;
  let fixture: ComponentFixture<ViewOnboardRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOnboardRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnboardRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
