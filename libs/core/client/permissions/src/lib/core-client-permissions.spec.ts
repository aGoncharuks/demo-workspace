import { coreClientPermissions } from './core-client-permissions';

describe('coreClientPermissions', () => {
  it('should work', () => {
    expect(coreClientPermissions()).toEqual('core-client-permissions');
  });
});
