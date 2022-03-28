import Link from 'next/link';
import classNames from 'classnames';
import { CLIENTS, DEMOS, OPEN_SOURCE, PROJECTS } from '../../services/Data';
import Introduction from '../../components/Introduction';
import Footer from '../../components/Footer';
import OpenSourceList from '../../components/OpenSourceList';
import CardList from '../../components/CardList';
import TagList from '../../components/TagList';
import DemoLink from '../../components/DemoLink';
import AnimatedWaypoint from '../../components/AnimatedWaypoint';
import SEO from '../../components/Seo';
import Recommendations from '../../components/Recommendations';
import ProgressiveImage from '../../components/ProgressiveImage';
import style from '../../styles/components/layout.module.scss';
import cardStyle from '../../styles/components/card.module.scss';
import projectStyle from '../../styles/components/project.module.scss';
import buttonStyle from '../../styles/components/button.module.scss';
import tagStyle from '../../styles/components/tag-list.module.scss';

const Work = props => {
  const renderProjectList = () => {
    return PROJECTS.map((project, i) => (
      <div className={cardStyle['card_row']} key={i}>
        <div className={classNames(cardStyle['card__column'], cardStyle['card__column--auto'])}>
          <ProgressiveImage
            className={classNames(cardStyle['card__image'], projectStyle['project__image'])}
            src={project.image}
            alt=''
          />
        </div>
        <div className={classNames(cardStyle['card__column'], cardStyle['card__column--auto'])}>
          <h3 className={classNames('h3', cardStyle['h3'], cardStyle['card__title'], projectStyle['project__title'])}>
            {project.title}
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              Visit
            </a>
          </h3>
          <div className={cardStyle['card__description-wrapper']}>
            <p className={cardStyle['card__description']}>{project.description}</p>
          </div>
          <Link href={project.url} className={classNames(projectStyle['project__link'])}>
            <a className={classNames(buttonStyle['button'], buttonStyle['button--secondary'])}>
              Case Study
            </a>
          </Link>
        </div>
      </div>
    ));
  };

  const renderDemoList = () => {
    return DEMOS.map((demo, i) => (
      <DemoLink
        key={`${demo.title}-${i}`}
        id={demo.id}
        title={demo.title}
        image={demo.image}
        hearts={demo.hearts}
      />
    ));
  };

  return (
    <main className='fade'>
      <SEO title='Work' siteTitle='Ryan Canfield' description='A selection of projects, demos &amp;&nbsp;clients.' />
      <Introduction title="My Work." subtitle="A selection of projects, demos &amp;&nbsp;clients." />
      <div className={style['content']} id='content'>
        <div className='hr' />
        <h3 className='h3'>
          <span className={classNames(tagStyle['tag__item'], tagStyle['tag__item--secondary'])}>NEW!</span> Case
          Studies
        </h3>
        <CardList twoWide cards={renderProjectList()} />
        <div className='hr hr--extra-margin' />
        <h3 className='h3'>Interface Demos</h3>
        <CardList cards={renderDemoList()} />
        <div className={style['content__split']}>
          <AnimatedWaypoint className={style['content__split__column']}>
            <div className='hr' />
            <h3 className='h3'>Open source projects</h3>
            <OpenSourceList items={OPEN_SOURCE} />
          </AnimatedWaypoint>
          <AnimatedWaypoint className={style['content__split__column']}>
            <div className='hr' />
            <h3 className={classNames('h3', style['client__list__header'])}>Companies I've worked with</h3>
            <TagList tags={CLIENTS} />
          </AnimatedWaypoint>
        </div>
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
}

export default Work;
