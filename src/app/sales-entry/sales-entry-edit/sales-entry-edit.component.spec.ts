import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEntryEditComponent } from './sales-entry-edit.component';

describe('SalesEntryEditComponent', () => {
  let component: SalesEntryEditComponent;
  let fixture: ComponentFixture<SalesEntryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEntryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
