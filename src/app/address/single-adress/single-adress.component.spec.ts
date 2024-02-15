import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdressComponent } from './single-adress.component';

describe('SingleAdressComponent', () => {
  let component: SingleAdressComponent;
  let fixture: ComponentFixture<SingleAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleAdressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
