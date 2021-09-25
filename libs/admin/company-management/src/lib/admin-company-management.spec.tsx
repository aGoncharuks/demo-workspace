import { render } from '@testing-library/react';

import AdminCompanyManagement from './admin-company-management';

describe('AdminCompanyManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminCompanyManagement />);
    expect(baseElement).toBeTruthy();
  });
});
