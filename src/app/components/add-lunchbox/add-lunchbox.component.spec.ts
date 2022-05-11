import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { AddLunchboxComponent } from './add-lunchbox.component';

describe('AddLunchboxComponent', () => {
  let component: AddLunchboxComponent;
  let fixture: ComponentFixture<AddLunchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLunchboxComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule,MdbCollapseModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLunchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('check if component created', () => {
    expect(component).toBeTruthy();
  })
  
});
