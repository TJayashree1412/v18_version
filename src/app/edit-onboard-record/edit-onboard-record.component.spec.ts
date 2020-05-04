import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOnboardRecordComponent } from './edit-onboard-record.component';

describe('EditOnboardRecordComponent', () => {
  let component: EditOnboardRecordComponent;
  let fixture: ComponentFixture<EditOnboardRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOnboardRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOnboardRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
