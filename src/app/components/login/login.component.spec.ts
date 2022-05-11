import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check if component created', () => {
    expect(component).toBeTruthy();
  })
  it('check if form is sending data.', () => {
    const loginForm = <NgForm>{
      value: {
        email: "a@gmail.com",
        password: "123"
      }
    };
    component.testForm(loginForm);
    expect(component.testemail).toBe("a@gmail.com");
    expect(component.testpass).toBe("123");
  });
});
