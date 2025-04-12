import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecondHandlerService } from './chain/second-handler/second-handler.service';
import { ChainService } from './chain/chain/chain.service';
import { FirstHandlerService } from './chain/first-handler/first-handler.service';
import { FirstHandler } from './chain/first-handler/first-handler';
import { SecondHandler } from './chain/second-handler/second-handler';
import { ThirdHandlerService } from './chain/third-handler/third-handler.service';
import { ThirdHandler } from './chain/third-handler/third-handler';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    SecondHandlerService,
    ChainService,
    FirstHandlerService,
    FirstHandler,
    SecondHandler,
    ThirdHandlerService,
    ThirdHandlerService,
    ThirdHandler,
  ],
})
export class AppModule {}
