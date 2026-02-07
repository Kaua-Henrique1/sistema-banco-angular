import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNavesComponent } from './listar-naves.component';

describe('ListarNavesComponent', () => {
  let component: ListarNavesComponent;
  let fixture: ComponentFixture<ListarNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarNavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
