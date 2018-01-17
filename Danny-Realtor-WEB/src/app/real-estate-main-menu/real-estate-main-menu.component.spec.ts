import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateMainMenuComponent } from './real-estate-main-menu.component';

describe('RealEstateMainMenuComponent', () => {
  let component: RealEstateMainMenuComponent;
  let fixture: ComponentFixture<RealEstateMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
