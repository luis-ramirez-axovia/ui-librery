import { render } from '@testing-library/react';
import ContainerFlex from './ContainerFlex';

describe('@component/ContainerFlex', () => {
  it('Render ConttainerFlex component', () => {
    //arrange
    const { getByRole } = render(<ContainerFlex role="banner" />);
    //act
    const ContainerFlexTest = getByRole('banner');
    //assert
    expect(ContainerFlexTest).toBeDefined();
  });
  it('Applys background blue to ContainerFlex', () => {
    //arrange
    const { getByRole } = render(
      <ContainerFlex role="banner" bgColor="blue" />
    );
    //act
    const ContainerFlexTest = getByRole('banner');
    const ContainerFlexStyels = getComputedStyle(ContainerFlexTest);
    //assert
    expect(ContainerFlexStyels.backgroundColor).toBe('blue');
  });
});
