import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgedittallerComponent } from './dlgedittaller.component';

describe('DlgedittallerComponent', () => {
  let component: DlgedittallerComponent;
  let fixture: ComponentFixture<DlgedittallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgedittallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgedittallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
