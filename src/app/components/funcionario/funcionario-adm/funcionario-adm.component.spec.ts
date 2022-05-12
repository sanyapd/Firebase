import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioAdmComponent } from './funcionario-adm.component';

describe('FuncionarioAdmComponent', () => {
  let component: FuncionarioAdmComponent;
  let fixture: ComponentFixture<FuncionarioAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
