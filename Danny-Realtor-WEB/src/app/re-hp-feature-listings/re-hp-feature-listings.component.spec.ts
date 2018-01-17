import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReHpFeatureListingsComponent } from './re-hp-feature-listings.component';

describe('ReHpFeatureListingsComponent', () => {
  let component: ReHpFeatureListingsComponent;
  let fixture: ComponentFixture<ReHpFeatureListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReHpFeatureListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReHpFeatureListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
