import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchedulerComponent } from './student-scheduler.component';

describe('StudentSchedulerComponent', () => {
  let component: StudentSchedulerComponent;
  let fixture: ComponentFixture<StudentSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
