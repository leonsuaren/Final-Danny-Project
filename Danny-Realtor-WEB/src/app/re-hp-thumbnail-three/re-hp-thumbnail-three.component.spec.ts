import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReHpThumbnailThreeComponent } from './re-hp-thumbnail-three.component';

describe('ReHpThumbnailThreeComponent', () => {
  let component: ReHpThumbnailThreeComponent;
  let fixture: ComponentFixture<ReHpThumbnailThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReHpThumbnailThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReHpThumbnailThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
