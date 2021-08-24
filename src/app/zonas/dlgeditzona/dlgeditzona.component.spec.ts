import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgeditzonaComponent } from './dlgeditzona.component';

describe('DlgeditzonaComponent', () => {
  let component: DlgeditzonaComponent;
  let fixture: ComponentFixture<DlgeditzonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlgeditzonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgeditzonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
