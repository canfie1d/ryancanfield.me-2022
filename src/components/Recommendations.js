import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { RECOMMENDATIONS } from '../services/Data';
import Icon from './Icon';
import style from '../styles/components/recommendation.module.scss';
import buttonStyle from '../styles/components/button.module.scss';
import tagStyle from '../styles/components/tag-list.module.scss';
import Flex from './layout/Flex';

const Recommendations = (props) => {
  const [recommendation, setRecommendation] = useState();
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const randomNumber = Math.floor(
      Math.random() * Math.floor(RECOMMENDATIONS.length)
    );
    const randomRecc = {
      ...RECOMMENDATIONS[randomNumber],
      ...{ index: randomNumber },
    };
    setRecommendation(randomRecc);
  }, []); // eslint-disable-line

  const updateRecomendation = (direction) => {
    if (direction === 'prev') {
      if (recommendation.index === 0) {
        setRecommendation({
          ...RECOMMENDATIONS[RECOMMENDATIONS.length - 1],
          ...{ index: RECOMMENDATIONS.length - 1 },
        });
      } else {
        setRecommendation({
          ...RECOMMENDATIONS[recommendation.index - 1],
          ...{ index: recommendation.index - 1 },
        });
      }
    } else {
      if (recommendation.index === RECOMMENDATIONS.length - 1) {
        setRecommendation({ ...RECOMMENDATIONS[0], ...{ index: 0 } });
      } else {
        setRecommendation({
          ...RECOMMENDATIONS[recommendation.index + 1],
          ...{ index: recommendation.index + 1 },
        });
      }
    }
  };

  const classes = [style['recommendation'], readMore && style['recommendation--auto']];

  if (recommendation) {
    return (
      <div key={recommendation.name} className={classNames(classes)}>
        <div className={style['recommendation__content']}>
          <Flex.Row justify='space-between' alignment='center'>
            <Flex.Column>
              <span className={classNames(tagStyle['tag__item'], tagStyle['tag__item--secondary'])}>NEW!</span>
              <p className={classNames('p', style['p'], style['p--small'])}>Recommended By:</p>
              <h3 className={classNames(style['h3'], 'h3')}>{recommendation.name}</h3>
              <h4 className='h4'>
                {recommendation.position} at {recommendation.company}
              </h4>
            </Flex.Column>
            <Flex.Column grow={0}>
              <button
                onClick={() => updateRecomendation('prev')}
                className={classNames(buttonStyle['button'], buttonStyle['button--transparent'], buttonStyle['button--inline'], buttonStyle['button--small'])}
              >
                <Icon name='caret-left' />
                <span className='visually-hidden'>Previous recommedation</span>
              </button>
              <button
                onClick={() => updateRecomendation('next')}
                className={classNames(buttonStyle['button'], buttonStyle['button--transparent'], buttonStyle['button--inline'], buttonStyle['button--small'])}
              >
                <Icon name='caret-right' />
                <span className='visually-hidden'>Next recommedation</span>
              </button>
            </Flex.Column>
          </Flex.Row>
          {readMore ? (
            recommendation.message.map((message, i) => (
              <p key={`message-${i}`} className={classNames(style['p'], 'p')}>{message}</p>
            ))
          ) : (
            <p className={classNames(style['p'], style['p--clamped'], 'p')}>{recommendation.message[0]}</p>
          )}
          <button
            className={classNames(buttonStyle['button'], buttonStyle['button--small'])}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Hide' : 'Continue Reading'}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Recommendations;
