import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerpreferenceComponent } from './partnerpreference.component';

describe('PartnerpreferenceComponent', () => {
  let component: PartnerpreferenceComponent;
  let fixture: ComponentFixture<PartnerpreferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerpreferenceComponent]
    });
    fixture = TestBed.createComponent(PartnerpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
