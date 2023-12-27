import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaResumeComponent } from './hiragana-resume.component';

describe('HiraganaResumeComponent', () => {
  let component: HiraganaResumeComponent;
  let fixture: ComponentFixture<HiraganaResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiraganaResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiraganaResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
