import { coreClientMessageBus } from './core-client-message-bus';

describe('coreClientMessageBus', () => {
  it('should work', () => {
    expect(coreClientMessageBus()).toEqual('core-client-message-bus');
  });
});
