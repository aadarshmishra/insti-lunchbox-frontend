import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingRequestsComponent } from './admin-pending-requests.component';

describe('AdminPendingRequestsComponent', () => {
  let component: AdminPendingRequestsComponent;
  let fixture: ComponentFixture<AdminPendingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPendingRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
