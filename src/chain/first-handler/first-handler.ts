
import { Injectable } from '@nestjs/common';
import { BaseHandler } from '../chain/base-handler';
import { ThirdHandler } from '../third-handler/third-handler';
import { SecondHandler } from '../second-handler/second-handler';
 
@Injectable()
export class FirstHandler extends BaseHandler {
    constructor(
        private readonly second: SecondHandler,
        private readonly third: ThirdHandler,
      ) {
        super();
      }

      
  public handle(request: any): any {
      const FIRST_FAIL = 'falha-no-primero';
    if (request === FIRST_FAIL) {
        console.log('Falha no primeiro handler, passando para o próximo...');
        this.setNext(this.third);
    }else {
        //se não cair na falha, segue pro segundo normalmente.
        this.setNext(this.second);
    }
    
    console.log('Processando regras do primeiro handler...');
    console.log('Processamento finalizado.')
    //chama o próximo handler.
    return super.handle(request);
  }
}
