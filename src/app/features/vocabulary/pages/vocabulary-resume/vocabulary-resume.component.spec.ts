import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyResumeComponent } from './vocabulary-resume.component';

describe('VocabularyResumeComponent', () => {
  let component: VocabularyResumeComponent;
  let fixture: ComponentFixture<VocabularyResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocabularyResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
