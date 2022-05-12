import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCardsComponent } from './funcionario-cards.component';

describe('FuncionarioCardsComponent', () => {
  let component: FuncionarioCardsComponent;
  let fixture: ComponentFixture<FuncionarioCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
