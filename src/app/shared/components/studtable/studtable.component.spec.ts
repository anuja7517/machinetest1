import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudtableComponent } from './studtable.component';

describe('StudtableComponent', () => {
  let component: StudtableComponent;
  let fixture: ComponentFixture<StudtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
