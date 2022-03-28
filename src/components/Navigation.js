import classNames from 'classnames';
import Link from 'next/link';
import Icon from './Icon';
import style from '../styles/components/navigation.module.scss';
import { useRouter } from 'next/router';

const Navigation = props => {
  const {asPath} = useRouter()
  return (
    <nav className={style['nav']}>
      <ul className={style['nav__list']}>
        <li className={style['nav__item']}>
          <Link href='/'>
            <a className={classNames(style['nav__link'], asPath === '/' && style["nav__link--active"])}>
              <Icon className={style['nav__link__icon']} name='about' color='white' size='large' />
              <span className={style['nav__link__title']}>About</span>
            </a>
          </Link>
        </li>
        <li className={style['nav__item']}>
          <Link href='/work'>
            <a className={classNames(style['nav__link'], asPath === '/work' && style["nav__link--active"])}>
              <Icon className={style['nav__link__icon']} name='work' color='white' size='large' />
              <span className={style['nav__link__title']}>Work</span>
            </a>
          </Link>
        </li>
        <li className={style['nav__item']}>
          <Link href='/writing'>
            <a className={classNames(style['nav__link'], asPath === '/writing' && style["nav__link--active"])}>
              <Icon className={style['nav__link__icon' ]} name='writing' color='white' size='large' />
              <span className={style['nav__link__title']}>Writing</span>
            </a>
          </Link>
        </li>
        <li className={style['nav__item']}>
          <Link href='/contact'>
            <a className={classNames(style['nav__link'], asPath === '/contact' && style["nav__link--active"])}>
              <Icon className={style['nav__link__icon']} name='contact' color='white' size='large' />
              <span className={style['nav__link__title']}>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
