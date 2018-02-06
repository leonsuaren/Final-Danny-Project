import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReHpThumbnailComponent } from './re-hp-thumbnail.component';

describe('ReHpThumbnailComponent', () => {
  let component: ReHpThumbnailComponent;
  let fixture: ComponentFixture<ReHpThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReHpThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReHpThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
