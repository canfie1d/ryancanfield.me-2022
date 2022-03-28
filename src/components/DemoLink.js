import classNames from 'classnames';
import Image from 'next/image';
import Icon from '../components/Icon';
import style from '../styles/components/demo-link.module.scss';

const DemoLink = props => {
  return (
    <a className={classNames('a', style['demo__link'])} href={`http://www.codepen.io/canfie1d/full/${props.id}`}>
      <div className={style['demo__link__column']}>
        <h3 className={classNames('h3', style['demo__title'])}>{props.title}</h3>
        <div className={style['demo__heart-container']}>
          <Icon name='heart' size='small' color='secondary' />
          <span className={style['demo__heart__quantity']}>{props.hearts}</span>
        </div>
      </div>
      <div className={style['demo__link__column']}>
        <Image sizes='50vw' layout='fill' objectFit='cover' src={props.image} alt='' />
      </div>
    </a>
  );
}

export default DemoLink;
