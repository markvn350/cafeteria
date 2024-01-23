import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaHeaderComponent } from './galeria-header.component';

describe('GaleriaHeaderComponent', () => {
  let component: GaleriaHeaderComponent;
  let fixture: ComponentFixture<GaleriaHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GaleriaHeaderComponent]
    });
    fixture = TestBed.createComponent(GaleriaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
