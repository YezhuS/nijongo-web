import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HiraganaActivityComponent} from './hiragana-activity.component';

describe('HiraganaActivityComponent', () => {
  let component: HiraganaActivityComponent;
  let fixture: ComponentFixture<HiraganaActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiraganaActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HiraganaActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
