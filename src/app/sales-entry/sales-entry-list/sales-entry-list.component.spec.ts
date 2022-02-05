import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEntryListComponent } from './sales-entry-list.component';

describe('SalesEntryListComponent', () => {
  let component: SalesEntryListComponent;
  let fixture: ComponentFixture<SalesEntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEntryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
