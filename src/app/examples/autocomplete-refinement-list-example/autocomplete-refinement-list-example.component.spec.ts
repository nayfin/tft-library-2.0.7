import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteRefinementListExampleComponent } from './autocomplete-refinement-list-example.component';

describe('AutocompleteRefinementListExampleComponent', () => {
  let component: AutocompleteRefinementListExampleComponent;
  let fixture: ComponentFixture<AutocompleteRefinementListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteRefinementListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteRefinementListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
