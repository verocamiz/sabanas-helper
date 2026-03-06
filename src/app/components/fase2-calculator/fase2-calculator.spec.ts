import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase2Calculator } from './fase2-calculator';

describe('Fase2Calculator', () => {
  let component: Fase2Calculator;
  let fixture: ComponentFixture<Fase2Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase2Calculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase2Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
