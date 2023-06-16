import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqNotFoundComponent } from './parq-not-found.component';

describe('ParqNotFoundComponent', () => {
  let component: ParqNotFoundComponent;
  let fixture: ComponentFixture<ParqNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParqNotFoundComponent]
    });
    fixture = TestBed.createComponent(ParqNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
