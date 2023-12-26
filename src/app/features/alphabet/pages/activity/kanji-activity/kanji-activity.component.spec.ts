import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KanjiActivityComponent} from './kanji-activity.component';

describe('KanjiActivityComponent', () => {
  let component: KanjiActivityComponent;
  let fixture: ComponentFixture<KanjiActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanjiActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KanjiActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
