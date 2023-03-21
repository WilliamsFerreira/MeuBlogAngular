import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeubotaoComponent } from './meubotao.component';

describe('MeubotaoComponent', () => {
  let component: MeubotaoComponent;
  let fixture: ComponentFixture<MeubotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeubotaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeubotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
