import { TestBed, async, inject } from '@angular/core/testing';

import { LoginSocialGuard } from './login-social.guard';

describe('LoginSocialGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSocialGuard]
    });
  });

  it('should ...', inject([LoginSocialGuard], (guard: LoginSocialGuard) => {
    expect(guard).toBeTruthy();
  }));
});
