import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartopsUiCoreComponent } from './smartops-ui-core.component';

describe('SmartopsUiCoreComponent', () => {
  let component: SmartopsUiCoreComponent;
  let fixture: ComponentFixture<SmartopsUiCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartopsUiCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartopsUiCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
