import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoHeaderComponent } from './proceso-header.component';

describe('ProcesoHeaderComponent', () => {
  let component: ProcesoHeaderComponent;
  let fixture: ComponentFixture<ProcesoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProcesoHeaderComponent]
    });
    fixture = TestBed.createComponent(ProcesoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
