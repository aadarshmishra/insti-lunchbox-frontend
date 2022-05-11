import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstituteUsersComponent } from './admin-institute-users.component';

describe('AdminInstituteUsersComponent', () => {
  let component: AdminInstituteUsersComponent;
  let fixture: ComponentFixture<AdminInstituteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInstituteUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstituteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
