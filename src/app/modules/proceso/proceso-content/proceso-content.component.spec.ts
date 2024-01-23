import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoContentComponent } from './proceso-content.component';

describe('ProcesoContentComponent', () => {
  let component: ProcesoContentComponent;
  let fixture: ComponentFixture<ProcesoContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProcesoContentComponent]
    });
    fixture = TestBed.createComponent(ProcesoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
