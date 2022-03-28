import { TransitionGroup,CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import styles from '../styles/components/layout.module.scss';

const Layout = (props) => {
  return (
    <div className={styles['l']}>
      <div className={styles['l--rightColumn']}>
        <a className='visually-hidden' href="#content">Skip to content</a>
        <Header />
      </div>
      <div className={styles['l--leftColumn']}>
        <TransitionGroup id='TransitionGroup'>
          <CSSTransition
            key={uuidv4()}
            classNames='fade'
            timeout={{ enter: 1000, exit: 300 }}
          >
            {props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Layout;
