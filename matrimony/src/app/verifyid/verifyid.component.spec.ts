import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyidComponent } from './verifyid.component';

describe('VerifyidComponent', () => {
  let component: VerifyidComponent;
  let fixture: ComponentFixture<VerifyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyidComponent]
    });
    fixture = TestBed.createComponent(VerifyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
