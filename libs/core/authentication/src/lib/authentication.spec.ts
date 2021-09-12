import { coreAuthentication } from './authentication';

describe('coreAuthentication', () => {
  it('should work', () => {
    expect(coreAuthentication()).toEqual('core-authentication');
  });
});
