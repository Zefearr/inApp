import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpItemsComponent } from './fp-items.component';

describe('FpItemsComponent', () => {
  let component: FpItemsComponent;
  let fixture: ComponentFixture<FpItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
