import Card from './Card';
import style from '../styles/components/card.module.scss';

const CardList = props => {
  const renderCards = () => {
    return props.cards.map((card, i) => (
      <Card
        key={i}
        element={props.element}
        inList
      >
        {card}
      </Card>
    ));
  }

  return (
    <ul className={style['card__list']}>
      {renderCards()}
    </ul>
  );
}

export default CardList;
