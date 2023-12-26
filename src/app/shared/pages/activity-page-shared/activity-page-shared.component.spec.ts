import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivityPageSharedComponent} from './activity-page-shared.component';

describe('ActivityPageSharedComponent', () => {
  let component: ActivityPageSharedComponent;
  let fixture: ComponentFixture<ActivityPageSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPageSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityPageSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
