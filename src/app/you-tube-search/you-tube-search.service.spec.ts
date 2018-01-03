import { TestBed, inject } from '@angular/core/testing';

import { YouTubeSearchService } from './you-tube-search.service';

describe('YouTubeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YouTubeSearchService]
    });
  });

  it('should ...', inject([YouTubeSearchService], (service: YouTubeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
