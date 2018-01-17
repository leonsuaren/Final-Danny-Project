import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReHpQuickSearchComponent } from './re-hp-quick-search.component';

describe('ReHpQuickSearchComponent', () => {
  let component: ReHpQuickSearchComponent;
  let fixture: ComponentFixture<ReHpQuickSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReHpQuickSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReHpQuickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
