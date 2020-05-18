import { TestBed } from '@angular/core/testing';

import { SmartopsUiCoreService } from './smartops-ui-core.service';

describe('SmartopsUiCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartopsUiCoreService = TestBed.get(SmartopsUiCoreService);
    expect(service).toBeTruthy();
  });
});
