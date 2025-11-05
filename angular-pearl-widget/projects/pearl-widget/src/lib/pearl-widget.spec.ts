import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PearlWidget } from './pearl-widget';

describe('PearlWidget', () => {
  let component: PearlWidget;
  let fixture: ComponentFixture<PearlWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PearlWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PearlWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
