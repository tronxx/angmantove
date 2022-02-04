import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgEditAlmacenComponent } from './dlg-edit-almacen.component';

describe('DlgEditAlmacenComponent', () => {
  let component: DlgEditAlmacenComponent;
  let fixture: ComponentFixture<DlgEditAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgEditAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgEditAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
