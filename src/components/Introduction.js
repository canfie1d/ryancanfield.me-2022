import classNames from 'classnames';
import style from '../styles/components/introduction.module.scss';

const Introduction = props => {
  return (
    <div className={style['introduction']}>
      <h1 className={classNames('h1', style['h1'])}>{props.title}</h1>
      <h2 className={classNames('h2', style['h2'])}>{props.subtitle}</h2>
    </div>
  );
}

export default Introduction;
