import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReContactFormComponent } from './re-contact-form.component';

describe('ReContactFormComponent', () => {
  let component: ReContactFormComponent;
  let fixture: ComponentFixture<ReContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
