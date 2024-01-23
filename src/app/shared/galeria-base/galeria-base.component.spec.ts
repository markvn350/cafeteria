import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaBaseComponent } from './galeria-base.component';

describe('GaleriaBaseComponent', () => {
  let component: GaleriaBaseComponent;
  let fixture: ComponentFixture<GaleriaBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GaleriaBaseComponent]
    });
    fixture = TestBed.createComponent(GaleriaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
