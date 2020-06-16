import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndExComponent } from './front-end-ex.component';

describe('FrontEndExComponent', () => {
  let component: FrontEndExComponent;
  let fixture: ComponentFixture<FrontEndExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
