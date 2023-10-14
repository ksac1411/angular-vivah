import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyotpComponent } from './myotp.component';

describe('MyotpComponent', () => {
  let component: MyotpComponent;
  let fixture: ComponentFixture<MyotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyotpComponent]
    });
    fixture = TestBed.createComponent(MyotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
