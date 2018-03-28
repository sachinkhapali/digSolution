import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRemovalComponent } from './link-removal.component';

describe('LinkRemovalComponent', () => {
  let component: LinkRemovalComponent;
  let fixture: ComponentFixture<LinkRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
