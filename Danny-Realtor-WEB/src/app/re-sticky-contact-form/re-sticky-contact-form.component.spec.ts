import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReStickyContactFormComponent } from './re-sticky-contact-form.component';

describe('ReStickyContactFormComponent', () => {
  let component: ReStickyContactFormComponent;
  let fixture: ComponentFixture<ReStickyContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReStickyContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReStickyContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
