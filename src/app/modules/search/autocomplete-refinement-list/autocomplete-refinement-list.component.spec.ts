import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteRefinementListComponent } from './autocomplete-refinement-list.component';

describe('AutocompleteRefinementListComponent', () => {
  let component: AutocompleteRefinementListComponent;
  let fixture: ComponentFixture<AutocompleteRefinementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteRefinementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteRefinementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
