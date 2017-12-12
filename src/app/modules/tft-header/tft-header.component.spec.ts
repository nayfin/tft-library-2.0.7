import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TftHeaderComponent } from './tft-header.component';

describe('TftHeaderComponent', () => {
  let component: TftHeaderComponent;
  let fixture: ComponentFixture<TftHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TftHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TftHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
