import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonesChildComponent } from './clones-child.component';

describe('ClonesChildComponent', () => {
  let component: ClonesChildComponent;
  let fixture: ComponentFixture<ClonesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
