import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LetterActivitySharedComponent} from './letter-activity-shared.component';

describe('LetterActivitySharedComponent', () => {
  let component: LetterActivitySharedComponent;
  let fixture: ComponentFixture<LetterActivitySharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterActivitySharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LetterActivitySharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
