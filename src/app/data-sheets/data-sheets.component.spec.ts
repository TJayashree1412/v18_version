import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSheetsComponent } from './data-sheets.component';

describe('DataSheetrsComponent', () => {
  let component: DataSheetsComponent;
  let fixture: ComponentFixture<DataSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
