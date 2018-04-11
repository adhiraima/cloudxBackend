import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficGeneralComponent } from './traffic-general.component';

describe('TrafficGeneralComponent', () => {
  let component: TrafficGeneralComponent;
  let fixture: ComponentFixture<TrafficGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
