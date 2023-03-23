import { render } from '@testing-library/react';
import Text from './Text'

describe('@component/Text', () => {
  it('', () => {
    const { getByRole } = render(
      <Text component="h1">Texto prueba</Text>
    );
    const textTest = getByRole('heading', { name: /Texto prueba/i });
    expect(textTest).toBeDefined();
  });
})
