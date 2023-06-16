import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqStatusComponent } from './parq-status.component';

describe('ParqStatusComponent', () => {
  let component: ParqStatusComponent;
  let fixture: ComponentFixture<ParqStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParqStatusComponent]
    });
    fixture = TestBed.createComponent(ParqStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
