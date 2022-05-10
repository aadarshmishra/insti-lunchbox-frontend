import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNgoUsersComponent } from './admin-ngo-users.component';

describe('AdminNgoUsersComponent', () => {
  let component: AdminNgoUsersComponent;
  let fixture: ComponentFixture<AdminNgoUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNgoUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNgoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
