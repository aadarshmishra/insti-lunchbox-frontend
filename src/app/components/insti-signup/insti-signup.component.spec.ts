import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { sample } from 'rxjs';

import { InstiSignupComponent } from './insti-signup.component';

describe('InstiSignupComponent', () => {
  let component: InstiSignupComponent;
  let fixture: ComponentFixture<InstiSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstiSignupComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstiSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('check if component created', () => {
    expect(component).toBeTruthy();
  })
  
});
