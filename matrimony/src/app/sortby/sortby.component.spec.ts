import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyComponent } from './sortby.component';

describe('SortbyComponent', () => {
  let component: SortbyComponent;
  let fixture: ComponentFixture<SortbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortbyComponent]
    });
    fixture = TestBed.createComponent(SortbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
