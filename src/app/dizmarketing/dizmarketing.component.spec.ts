import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DizmarketingComponent } from './dizmarketing.component';

describe('DizmarketingComponent', () => {
  let component: DizmarketingComponent;
  let fixture: ComponentFixture<DizmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DizmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DizmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
