import { Injectable } from '@nestjs/common';
import { FirstHandler } from '../first-handler/first-handler';

@Injectable()
export class ChainService {
  constructor(
    private readonly first: FirstHandler,
  ) {
  }

  public process(request: any): any {
     let result =  this.first.handle(request) || 'Nenhum handler conseguiu processar';
        console.log('Resultado:', result);
      return result;
  }
}
