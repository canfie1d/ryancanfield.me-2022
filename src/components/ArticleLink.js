import Image from 'next/image';
import style from '../styles/components/card.module.scss';

const ArticleLink = props => {
  return (
    <a href={props.url} className={style['card__link']}>
      <div className={style['card__row']}>
        <div className={style['card__column']}>
          <Image layout='fill' src={props.imageUrl} className={style['card__image']} alt='presentational card' role="presentation" />
        </div>
        <div className={style['card__column']}>
          <span className={style['card__title']}>
            {props.title}
          </span>
          <div className={style['card__description-wrapper']}>
            <p className={style['card__description']}>
              {props.description}
            </p>
          </div>
          <span className={style['card__length']}>
            {props.lengthœ}
          </span>
        </div>
      </div>
    </a>
  );
}

export default ArticleLink;
