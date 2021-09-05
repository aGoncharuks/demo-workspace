import { DemoType } from '@demo-workspace/shared';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDemoData(): DemoType[] {
    return this.appService.getDemoData();
  }
}
