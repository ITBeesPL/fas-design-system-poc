import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItbeesDesignSystemComponent } from './itbees-design-system.component';

describe('ItbeesDesignSystemComponent', () => {
  let component: ItbeesDesignSystemComponent;
  let fixture: ComponentFixture<ItbeesDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItbeesDesignSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItbeesDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
