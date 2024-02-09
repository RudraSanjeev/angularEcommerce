import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleScrollerProductComponent } from './single-scroller-product.component';

describe('SingleScrollerProductComponent', () => {
  let component: SingleScrollerProductComponent;
  let fixture: ComponentFixture<SingleScrollerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleScrollerProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleScrollerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
