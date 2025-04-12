import { Injectable } from '@nestjs/common';
import { BaseHandler } from '../chain/base-handler';

@Injectable()
export class ThirdHandler extends BaseHandler {
    
    public handle(request: any): any {
        const THIRD_FAIL = 'falha-no-terceiro';
        const SUCESSO_SEGUNDO = 'SUCESSO_TERCEIRO';

        if (request === THIRD_FAIL) {
            return THIRD_FAIL;
        }

        console.log('Processando regras do terceiro handler...');
        console.log('Processamento finalizado.');
        
        return SUCESSO_SEGUNDO;
    }
}
