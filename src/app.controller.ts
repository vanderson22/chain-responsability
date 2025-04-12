import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ChainService } from './chain/chain/chain.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly chainService: ChainService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('chain')
  handle(@Query('input') input: string) {
    return this.chainService.process(input);
  }

}
