import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxExampleComponent } from './search-box-example.component';

describe('SearchBoxExampleComponent', () => {
  let component: SearchBoxExampleComponent;
  let fixture: ComponentFixture<SearchBoxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
