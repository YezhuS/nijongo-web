import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckboxGenericComponent} from './checkbox-generic.component';

describe('CheckboxGenericComponent', () => {
  let component: CheckboxGenericComponent;
  let fixture: ComponentFixture<CheckboxGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxGenericComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
