import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApplicationComponent } from './web-application.component';

describe('WebApplicationComponent', () => {
  let component: WebApplicationComponent;
  let fixture: ComponentFixture<WebApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
