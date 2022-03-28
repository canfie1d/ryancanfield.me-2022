import { useState } from 'react';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';

const AnimatedWaypoint = props => {
  const [waypoint, setWaypoint] = useState({});

  const renderElement = () => {
      const classes = [
      'waypoint',
      waypoint.currentPosition === 'inside' && 'waypoint--inView',
      props.className && props.className
    ];

    if (props.element) {
      return (
        <props.element className={classNames(classes)}>
          {props.children}
        </props.element>
      );
    }

    return (
      <div className={classNames(classes)}>
        {props.children}
      </div>
    );
  }

  return (
    <Waypoint
      scrollableAncestor={typeof window !== 'undefined' ? window: ''}
      onEnter={waypoint => setWaypoint(waypoint)}
      bottomOffset={100}
    >
      {renderElement()}
    </Waypoint>
  );
};

export default AnimatedWaypoint;
