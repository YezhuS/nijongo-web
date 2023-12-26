import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetHomeComponent } from './alphabet-home.component';

describe('AlphabetHomeComponent', () => {
  let component: AlphabetHomeComponent;
  let fixture: ComponentFixture<AlphabetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabetHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphabetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
