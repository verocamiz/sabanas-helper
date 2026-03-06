import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fase3Calculator } from './fase3-calculator';

describe('Fase3Calculator', () => {
  let component: Fase3Calculator;
  let fixture: ComponentFixture<Fase3Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fase3Calculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fase3Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
