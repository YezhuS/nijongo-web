import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KatakanaActivityComponent} from './katakana-activity.component';

describe('KatakanaActivityComponent', () => {
  let component: KatakanaActivityComponent;
  let fixture: ComponentFixture<KatakanaActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KatakanaActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KatakanaActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
