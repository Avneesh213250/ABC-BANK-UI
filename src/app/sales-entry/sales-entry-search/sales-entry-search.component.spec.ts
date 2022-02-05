import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEntrySearchComponent } from './sales-entry-search.component';

describe('SalesEntrySearchComponent', () => {
  let component: SalesEntrySearchComponent;
  let fixture: ComponentFixture<SalesEntrySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEntrySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesEntrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
