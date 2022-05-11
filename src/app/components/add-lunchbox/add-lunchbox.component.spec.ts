import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLunchboxComponent } from './add-lunchbox.component';

describe('AddLunchboxComponent', () => {
  let component: AddLunchboxComponent;
  let fixture: ComponentFixture<AddLunchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLunchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLunchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
