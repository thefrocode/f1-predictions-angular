import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionsFormComponent } from './predictions-form.component';

describe('PredictionsFormComponent', () => {
  let component: PredictionsFormComponent;
  let fixture: ComponentFixture<PredictionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredictionsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PredictionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
