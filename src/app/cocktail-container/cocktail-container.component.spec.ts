import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailContainerComponent } from './cocktail-container.component';

describe('CocktailContainerComponent', () => {
  let component: CocktailContainerComponent;
  let fixture: ComponentFixture<CocktailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
