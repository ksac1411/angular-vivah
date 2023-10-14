import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbycriteriaComponent } from './searchbycriteria.component';

describe('SearchbycriteriaComponent', () => {
  let component: SearchbycriteriaComponent;
  let fixture: ComponentFixture<SearchbycriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbycriteriaComponent]
    });
    fixture = TestBed.createComponent(SearchbycriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
