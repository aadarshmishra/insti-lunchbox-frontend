import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiSignupComponent } from './insti-signup.component';

describe('InstiSignupComponent', () => {
  let component: InstiSignupComponent;
  let fixture: ComponentFixture<InstiSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstiSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstiSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
