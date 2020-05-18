import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonesSubComponent } from './clones-sub.component';

describe('ClonesSubComponent', () => {
  let component: ClonesSubComponent;
  let fixture: ComponentFixture<ClonesSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonesSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonesSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
