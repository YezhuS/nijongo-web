import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLetterResumeSharedComponent } from './item-letter-resume-shared.component';

describe('ItemLetterResumeSharedComponent', () => {
  let component: ItemLetterResumeSharedComponent;
  let fixture: ComponentFixture<ItemLetterResumeSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemLetterResumeSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemLetterResumeSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
