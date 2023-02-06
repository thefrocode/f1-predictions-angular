import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipRoundsListComponent } from './championship-rounds-list.component';

describe('ChampionshipRoundsListComponent', () => {
  let component: ChampionshipRoundsListComponent;
  let fixture: ComponentFixture<ChampionshipRoundsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChampionshipRoundsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionshipRoundsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
