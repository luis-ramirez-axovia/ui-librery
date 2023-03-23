import { render } from '@testing-library/react';
import MediaImg from './MediaImg';

describe('@component/MediaImg', () => {
  it('Render ConttainerFlex component', () => {
    //arrange
    const { getByRole } = render(
      <MediaImg
        alt="customImage"
        src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
      />
    );
    //act
    const MediaImgTest = getByRole('img');
    //assert
    expect(MediaImgTest).toBeInTheDocument();
    expect(MediaImgTest).toHaveAttribute(
      'src',
      'https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg'
    );
    expect(MediaImgTest).toHaveAttribute('alt', 'customImage');
  });
  it('Test styles from MediaImg', () => {
    //arrange
    const { getByRole } = render(
      <MediaImg
        width="100px"
        height="200px"
        borderRadius="20px"
        alt="customImage"
        src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
      />
    );
    //act
    const MediaImgTest = getByRole('img');
    //assert
    expect(MediaImgTest).toHaveStyle('width: 100px');
    expect(MediaImgTest).toHaveStyle('height:200px');
    expect(MediaImgTest).toHaveStyle('border-radius:20px');
  });
});
