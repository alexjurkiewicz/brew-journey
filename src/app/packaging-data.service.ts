import { Injectable } from '@angular/core';

import { Packaging } from './packaging';

@Injectable()
export class PackagingDataService {

  packages: Array<Packaging> = [
    new Packaging('hand-sealed bottles', 1.5, 0.375, 1.45),
    new Packaging('full growlers', 1.3, 2, 4),
  ];

  constructor() { }

}
