import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiDashboardComponent } from './insti-dashboard.component';

describe('InstiDashboardComponent', () => {
  let component: InstiDashboardComponent;
  let fixture: ComponentFixture<InstiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstiDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
