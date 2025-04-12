import { Handler } from './handler.interface';

export abstract class BaseHandler implements Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: any): any {
    if (this.nextHandler) {
        //isso faz com que o proximo handler seja chamado até que finalize todos.
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
