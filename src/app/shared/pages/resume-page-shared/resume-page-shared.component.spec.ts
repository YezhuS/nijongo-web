import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResumePageSharedComponent} from './resume-page-shared.component';

describe('ResumePageSharedComponent', () => {
  let component: ResumePageSharedComponent;
  let fixture: ComponentFixture<ResumePageSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePageSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumePageSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
