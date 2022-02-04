import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgeditciudadComponent } from './dlgeditciudad.component';

describe('DlgeditciudadComponent', () => {
  let component: DlgeditciudadComponent;
  let fixture: ComponentFixture<DlgeditciudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgeditciudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgeditciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
