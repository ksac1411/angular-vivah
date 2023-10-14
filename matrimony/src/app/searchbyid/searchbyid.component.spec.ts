import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyidComponent } from './searchbyid.component';

describe('SearchbyidComponent', () => {
  let component: SearchbyidComponent;
  let fixture: ComponentFixture<SearchbyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbyidComponent]
    });
    fixture = TestBed.createComponent(SearchbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
