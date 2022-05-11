import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { InstiDashboardComponent } from './insti-dashboard.component';

describe('InstiDashboardComponent', () => {
  let component: InstiDashboardComponent;
  let fixture: ComponentFixture<InstiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstiDashboardComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule, MdbCollapseModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('check if component created', () => {
    expect(component).toBeTruthy();
  })
  
});
