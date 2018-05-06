import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSignupComponent } from './news-signup.component';

describe('NewsSignupComponent', () => {
  let component: NewsSignupComponent;
  let fixture: ComponentFixture<NewsSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
