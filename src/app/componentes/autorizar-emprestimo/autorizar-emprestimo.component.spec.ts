import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarEmprestimoComponent } from './autorizar-emprestimo.component';

describe('AutorizarEmprestimoComponent', () => {
  let component: AutorizarEmprestimoComponent;
  let fixture: ComponentFixture<AutorizarEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorizarEmprestimoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizarEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
