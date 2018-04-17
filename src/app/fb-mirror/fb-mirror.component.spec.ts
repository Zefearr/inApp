import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbMirrorComponent } from './fb-mirror.component';

describe('FbMirrorComponent', () => {
  let component: FbMirrorComponent;
  let fixture: ComponentFixture<FbMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbMirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
