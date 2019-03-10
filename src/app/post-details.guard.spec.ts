import { TestBed, async, inject } from '@angular/core/testing';

import { PostDetails.ComponentGuard } from './posts/pages/post-details/post-details.guard';

describe('PostDetails.ComponentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDetails.ComponentGuard]
    });
  });

  it('should ...', inject([PostDetails.ComponentGuard], (guard: PostDetails.ComponentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
