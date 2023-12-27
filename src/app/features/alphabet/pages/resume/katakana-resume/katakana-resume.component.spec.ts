import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatakanaResumeComponent } from './katakana-resume.component';

describe('KatakanaResumeComponent', () => {
  let component: KatakanaResumeComponent;
  let fixture: ComponentFixture<KatakanaResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KatakanaResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KatakanaResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
