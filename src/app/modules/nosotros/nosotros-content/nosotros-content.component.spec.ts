import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosContentComponent } from './nosotros-content.component';

describe('NosotrosContentComponent', () => {
  let component: NosotrosContentComponent;
  let fixture: ComponentFixture<NosotrosContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NosotrosContentComponent]
    });
    fixture = TestBed.createComponent(NosotrosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
