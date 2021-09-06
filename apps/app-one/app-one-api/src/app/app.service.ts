import { DemoType } from '@demo-workspace/app-one-shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDemoData(): DemoType[] {
    return [
      {
        id: 1,
        name: 'Name 1',
      },
      {
        id: 2,
        name: 'Name 2',
      },
    ];
  }
}
