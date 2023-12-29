import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyActivityComponent } from './vocabulary-activity.component';

describe('VocabularyActivityComponent', () => {
  let component: VocabularyActivityComponent;
  let fixture: ComponentFixture<VocabularyActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocabularyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
