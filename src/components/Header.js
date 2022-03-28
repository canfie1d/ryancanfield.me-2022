import Navigation from './Navigation';
import style from '../styles/components/header.module.scss';

const Header = props => {
  return (
    <header className={style['header']}>
      <h1 className={style['h1']}>Ryan Canfield</h1>
      <Navigation />
    </header>
  );
}

export default Header;
