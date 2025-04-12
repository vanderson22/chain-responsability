import { Injectable } from '@nestjs/common';
import { BaseHandler } from '../chain/base-handler';
import { ThirdHandler } from '../third-handler/third-handler';

@Injectable()
export class SecondHandler extends BaseHandler {
    constructor(
        private readonly next: ThirdHandler,
    ) {
        super();
    }

    public handle(request: any): any {
        const SECOND_FAIL = 'falha-no-segundo';
        const SUCESSO_SEGUNDO = 'SUCESSO_SEGUNDO';

        if (request === SECOND_FAIL) {
            console.log('Falha no segundo handler, passando para o próximo...');
            this.setNext(this.next);
        }

        console.log('Processando regras do segundo handler...');
        console.log('Processamento finalizado.');

        if (request === SUCESSO_SEGUNDO) {
            return SUCESSO_SEGUNDO;
        }

        //se não cair na falha, ele não chama o próximo handler.
        return super.handle(request);
    }
}
