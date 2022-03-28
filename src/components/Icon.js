import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from '../styles/components/icon.module.scss';

const Icon = props => {
  const [ isMounted, setIsMounted ] = useState(false);
  const [ icon, setIcon ] = useState('');

  useEffect(() => {
    // This article details webpack magic comments used in dynamic import
    // https://medium.com/front-end-hacking/webpack-and-dynamic-imports-doing-it-right-72549ff49234

    // isMounted is an antipattern but solves the problem for this case
    // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
    setIsMounted(true);
    const iconPath = `./icons/${props.name}`;
    import(/* webpackMode: "eager" */ `${iconPath}`)
      .then(module => {
        return module.default();
      })
      .then(IconComponent => {
        if (isMounted) {
          setIcon(IconComponent);
        }
      })
      .catch(() => {
        console.warn(`ICON NOT FOUND - ${props.name}`)
      })

    return function cleanup() {
      setIsMounted(false);
    };
  }, [isMounted, props.name])

  const classes = [
    style['icon'],
    props.size && style[`icon--${props.size}`],
    props.color && style[`icon--${props.color}`],
    props.rotate && style[`icon--rotate-${props.rotate}`],
    props.displayInline && style['icon--inline'],
    props.dropShadow && style['drop-shadow'],
    props.className,
  ];

  return (
    <span className={classNames(classes)} style={props.style}>
      {icon}
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'x-small',
    'small',
    'large',
    'x-large',
    null,
  ]),
  rotate: PropTypes.oneOf([
    0,
    45,
    90,
    180,
    270,
  ]),
  color: PropTypes.oneOf([
    'black',
    'white',
    'primary',
    'secondary',
    'tertiary',
    'status--success',
    'status--warning',
    'status--error',
    null,
  ]),
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: null,
  rotate: null,
  color: null,
  class: null
}

export default Icon;
