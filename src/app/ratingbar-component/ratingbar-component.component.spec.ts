import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingbarComponentComponent } from './ratingbar-component.component';

describe('RatingbarComponentComponent', () => {
  let component: RatingbarComponentComponent;
  let fixture: ComponentFixture<RatingbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingbarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
