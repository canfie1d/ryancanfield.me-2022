import AnimatedWaypoint from './AnimatedWaypoint';
import CardList from './CardList';
import Introduction from './Introduction';
import ProgressiveImage from './ProgressiveImage';
import style from '../styles/components/layout.module.scss';

const Collection = (props) => {
  const renderImages = (images) => {
    return images.map((image, i) => (
      <button
        key={`image-${i}`}
        className='button button--invisible margin-top--large'
        onClick={(e) => {
          props.setActiveImage(image);
          props.openModal(e);
        }}
      >
        <div>
          <ProgressiveImage
            className='shadow display--block max-width--100'
            src={image}
            alt=''
          />
        </div>
      </button>
    ));
  };

  return (
    <>
      <Introduction
        super='Case Study:'
        title='Collection'
        subtitle='Selected work from past projects.'
      />
      <div className={style['content']} id='content'>
        <div className='content__split content__split--reverse-small'>
          <AnimatedWaypoint className='content__split__column'>
            <button
              className='button button--invisible margin-top--large'
              onClick={(e) => {
                props.setActiveImage(
                  'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/details.png'
                );
                props.openModal(e);
              }}
            >
              <div>
                <ProgressiveImage
                  className='shadow display--block max-width--100'
                  src='https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/details.png'
                  alt=''
                />
              </div>
            </button>
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>Hotelogical</h3>
            <p className='p'>
              Hotelogical is a corporate travel and hotel membership service for
              human resource departments. Companies can search view and book
              hotel rooms for discounted rates for their employees anywhere in
              the world.
            </p>
          </AnimatedWaypoint>
        </div>
        <AnimatedWaypoint>
          <CardList
            cards={renderImages([
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/home.png',
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/map.png',
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/results.png',
            ])}
          />
        </AnimatedWaypoint>
        {/* break */}
        <div className='content__split'>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>Tru Tankless</h3>
            <p className='p'>
              TruTankless is a tankless water heater provider that needed an app
              that would allow their customers to manage their water heaters
              across different locations.
            </p>
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            <button
              className='button button--invisible margin-top--large'
              onClick={(e) => {
                props.setActiveImage(
                  'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/dashboard.png'
                );
                props.openModal(e);
              }}
            >
              <div>
                <ProgressiveImage
                  className='shadow display--block max-width--100'
                  src='https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/home.png'
                  caption=''
                  alt=''
                />
              </div>
            </button>
          </AnimatedWaypoint>
        </div>
        <AnimatedWaypoint>
          <CardList
            cards={renderImages([
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/dashboard.png',
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/login.png',
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/form.png',
            ])}
          />
        </AnimatedWaypoint>
        <div className='content__split content__split--reverse-small margin-top--large'>
          <AnimatedWaypoint className='content__split__column'>
            <button
              className='button button--invisible margin-top--large'
              onClick={(e) => {
                props.setActiveImage(
                  'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/gdp.png'
                );
                props.openModal(e);
              }}
            >
              <div>
                <ProgressiveImage
                  className='shadow display--block max-width--100'
                  src='https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/gdp.png'
                  alt=''
                />
              </div>
            </button>
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>US Mex Pat</h3>
            <p className='p'>
              US Mex Pat is a tool used to evalutate how changes in United
              States and/or Mexican border policy, border wait times, and
              changes within the workforce could effect the GDP in both
              countries. This tool was developed in partnership with Arizona
              State University for Arizona state senators.
            </p>
          </AnimatedWaypoint>
        </div>
        <AnimatedWaypoint>
          <CardList
            cards={renderImages([
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/home.png',
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/menu.png',
              'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/form.png',
            ])}
          />
        </AnimatedWaypoint>
        <div className='content__split'>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>Command Synter</h3>
            <p className='p'>
              Command Synter was an internal developer tool for designed for
              Synapse Studios. It was used to manager development enviroments
              and virtual machines.
            </p>
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            <button
              className='button button--invisible margin-top--large'
              onClick={(e) => {
                props.setActiveImage(
                  'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Command+Synter/dashboard.png'
                );
                props.openModal(e);
              }}
            >
              <div>
                <ProgressiveImage
                  className='shadow display--block max-width--100'
                  src='https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Command+Synter/dashboard.png'
                  caption=''
                  alt=''
                />
              </div>
            </button>
          </AnimatedWaypoint>
        </div>
      </div>
    </>
  );
};

export default Collection;
