import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimpipeComponent } from './trimpipe.component';

describe('TrimpipeComponent', () => {
  let component: TrimpipeComponent;
  let fixture: ComponentFixture<TrimpipeComponent>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
