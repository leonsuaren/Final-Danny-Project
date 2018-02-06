import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReHpThumbnailOneComponent } from './re-hp-thumbnail-one.component';

describe('ReHpThumbnailOneComponent', () => {
  let component: ReHpThumbnailOneComponent;
  let fixture: ComponentFixture<ReHpThumbnailOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReHpThumbnailOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReHpThumbnailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
