import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalladecargaComponent } from './pantalladecarga.component';

describe('PantalladecargaComponent', () => {
  let component: PantalladecargaComponent;
  let fixture: ComponentFixture<PantalladecargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantalladecargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantalladecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
