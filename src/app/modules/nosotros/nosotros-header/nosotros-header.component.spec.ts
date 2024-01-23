import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosHeaderComponent } from './nosotros-header.component';

describe('NosotrosHeaderComponent', () => {
  let component: NosotrosHeaderComponent;
  let fixture: ComponentFixture<NosotrosHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NosotrosHeaderComponent]
    });
    fixture = TestBed.createComponent(NosotrosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
