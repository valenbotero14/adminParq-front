import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqManagmentComponent } from './parq-managment.component';

describe('ParqManagmentComponent', () => {
  let component: ParqManagmentComponent;
  let fixture: ComponentFixture<ParqManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParqManagmentComponent]
    });
    fixture = TestBed.createComponent(ParqManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
