import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useModal } from '../../hooks/useModal';
import classNames from 'classnames';
import { CASE_STUDIES } from '../../services/Data';
import Introduction from '../../components/Introduction';
import Footer from '../../components/Footer';
import Icon from '../../components/Icon';
import Video from '../../components/Video';
import AnimatedWaypoint from '../../components/AnimatedWaypoint';
import CardList from '../../components/CardList';
import ProgressiveImage from '../../components/ProgressiveImage';
import Collection from '../../components/Collection';
import SEO from '../../components/Seo';
import style from '../../styles/components/layout.module.scss';
import buttonStyle from '../../styles/components/button.module.scss';

const CaseStudy = (props) => {
  const { openModal, closeModal, isOpen, Modal } = useModal();
  const [activeImage, setActiveImage] = useState();

  const router = useRouter();
  const { id } = router.query

  const caseStudyId = id;

  const caseStudy = CASE_STUDIES.find(
    (caseStudy) => caseStudy.id === caseStudyId
  );

  const renderAdditionalImages = () => {
    return caseStudy.additionalImages.map((image, i) => (
      <button
        key={`additional-image-${i}`}
        className='button button--invisible'
        onClick={(e) => {
          setActiveImage(image.src);
          openModal(e);
        }}
      >
        <ProgressiveImage
          className='display--block max-width--100 shadow'
          src={image.src}
          caption={image.caption}
          alt=''
        />
      </button>
    ));
  };

  if (caseStudy || caseStudyId === 'collection') {
    return (
      <main>
        <SEO title={caseStudy.title} siteTitle='Ryan Canfield' description={caseStudy.subtitle} />
        {isOpen && activeImage && (
          <Modal>
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className='button button--invisible'
                  style={{ marginBottom: '16px' }}
                  onClick={(e) => closeModal(e)}
                >
                  <Icon name='close' color='white' size='large' />
                  <span className='visually-hidden'>Close</span>
                </button>
              </div>
              <ProgressiveImage
                style={{
                  width: 'inherit',
                  height: 'auto',
                }}
                src={activeImage}
              />
            </div>
          </Modal>
        )}
        {caseStudyId === 'collection' ? (
          <Collection setActiveImage={setActiveImage} openModal={openModal} />
        ) : (
          <>
            <Introduction
              key={caseStudy.id}
              super='Case Study:'
              title={caseStudy.title}
              subtitle={caseStudy.subtitle}
            />
            <div className={style['content']} id='content'>
              <div className={style['content__split']}>
                <AnimatedWaypoint className={style['content__split__column']}>
                  <div className='hr' />
                  <h3 className='h3'>Problem Analysis</h3>
                  {caseStudy.problem.content.map((problem, i) => (
                    <p key={`problem-${i}`} className='p'>
                      {problem}
                    </p>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className={style['content__split__column']}>
                  {caseStudy.problem.images.map((image, i) => (
                    <button
                      key={`problem-image-${i}`}
                      className='button button--invisible margin-top--large'
                      onClick={(e) => {
                        setActiveImage(image.src);
                        openModal(e);
                      }}
                    >
                      <div>
                        <ProgressiveImage
                          className='shadow display--block max-width--100'
                          src={image.src}
                          caption={image.caption}
                          alt=''
                        />
                      </div>
                    </button>
                  ))}
                </AnimatedWaypoint>
              </div>
              <div className={style['content__split content__split--reverse-small']}>
                <AnimatedWaypoint className={style['content__split__column']}>
                  {caseStudy.solution.images.map((image, i) => (
                    <button
                      key={`solution-image-${i}`}
                      className='button button--invisible margin-top--large'
                      onClick={(e) => {
                        setActiveImage(image.src);
                        openModal(e);
                      }}
                    >
                      <ProgressiveImage
                        className='shadow display--block max-width--100'
                        src={image.src}
                        caption={image.caption}
                        alt=''
                      />
                    </button>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className={style['content__split__column']}>
                  <div className='hr' />
                  <h3 className='h3'>Solution</h3>
                  {caseStudy.solution.content.map((solution, i) => (
                    <p key={`solution-${i}`} className='p'>
                      {solution}
                    </p>
                  ))}
                </AnimatedWaypoint>
              </div>
              <div className={style['content__split']}>
                <AnimatedWaypoint className={style['content__split__column']}>
                  <div className='hr' />
                  <h3 className='h3'>Result</h3>
                  {caseStudy.result.content.map((result, i) => (
                    <p key={`result-${i}`} className='p'>
                      {result}
                    </p>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className={style['content__split__column']}>
                  {caseStudy.result.images.map((image, i) => (
                    <button
                      key={`result-image-${i}`}
                      className={classNames(buttonStyle['button'], buttonStyle['button--invisible'], 'margin-top--large')}
                      onClick={(e) => {
                        setActiveImage(image.src);
                        openModal(e);
                      }}
                    >
                      <ProgressiveImage
                        className='browser display--block max-width--100'
                        src={image.src}
                        caption={image.caption}
                        alt=''
                      />
                    </button>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className='margin-top--large'>
                  <CardList cards={renderAdditionalImages()} />
                </AnimatedWaypoint>
                {caseStudy.videoUrl && (
                  <AnimatedWaypoint className='margin--auto margin-top--large'>
                    <Video
                      className='browser'
                      poster={caseStudy.videoPoster}
                      src={caseStudy.videoUrl}
                    />
                  </AnimatedWaypoint>
                )}
              </div>
            </div>
          </>
        )}
        <Footer>
          <Link href='/work'>
            <a className='a a--large'>
              Back
            </a>
          </Link>
        </Footer>
      </main>
    );
  }
  return null;
};

export default CaseStudy;
