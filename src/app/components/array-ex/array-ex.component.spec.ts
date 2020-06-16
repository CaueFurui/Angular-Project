import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayExComponent } from './array-ex.component';

describe('ArrayExComponent', () => {
  let component: ArrayExComponent;
  let fixture: ComponentFixture<ArrayExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
