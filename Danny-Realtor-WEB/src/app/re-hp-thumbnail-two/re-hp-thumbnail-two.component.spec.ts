import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReHpThumbnailTwoComponent } from './re-hp-thumbnail-two.component';

describe('ReHpThumbnailTwoComponent', () => {
  let component: ReHpThumbnailTwoComponent;
  let fixture: ComponentFixture<ReHpThumbnailTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReHpThumbnailTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReHpThumbnailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
