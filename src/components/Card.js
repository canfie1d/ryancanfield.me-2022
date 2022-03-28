import classNames from 'classnames';
import AnimatedWaypoint from '../components/AnimatedWaypoint';
import style from '../styles/components/card.module.scss';

const Card = props => {
  const classes = [
    style['card__item'],
    props.className && props.className
  ];

  if (props.inList) {
    return (
      <AnimatedWaypoint element={props.element || 'li'} className={classNames(classes)}>
        {props.children}
      </AnimatedWaypoint>
    );
  }

  return (
    <AnimatedWaypoint element={props.element || 'div'}>
      <div className={classNames(classes)}>
        {props.children}
      </div>
    </AnimatedWaypoint>
  );
}

export default Card;
