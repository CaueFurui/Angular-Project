import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicExComponent } from './logic-ex.component';

describe('LogicExComponent', () => {
  let component: LogicExComponent;
  let fixture: ComponentFixture<LogicExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
