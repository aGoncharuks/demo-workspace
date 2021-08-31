import { Controller, Get } from '@nestjs/common';
// import { DemoType } from '@shared/types';
import { AppService } from './app.service';

@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDemoData(): any[] {
    return this.appService.getDemoData();
  }
}
