import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesNaveComponent } from './detalhes-nave.component';

describe('DetalhesNaveComponent', () => {
  let component: DetalhesNaveComponent;
  let fixture: ComponentFixture<DetalhesNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesNaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
