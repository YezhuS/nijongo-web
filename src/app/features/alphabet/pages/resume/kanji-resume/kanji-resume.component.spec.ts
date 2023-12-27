import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KanjiResumeComponent} from './kanji-resume.component';

describe('KanjiResumeComponent', () => {
  let component: KanjiResumeComponent;
  let fixture: ComponentFixture<KanjiResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanjiResumeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KanjiResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
