import { HeaderStyled } from './style-header';

type Image = any;

export function Header() {
  const image: Image = localStorage.getItem('img');

  return (
    <HeaderStyled>
      <figure>
        <img src="/logo.png" alt="Logo" />
      </figure>
      <button type="button">
        <img src={image} alt="Logo" id="img-avatar" />
      </button>
    </HeaderStyled>
  );
}
