import style from '../styles/components/tag-list.module.scss';
import classNames from 'classnames';

const TagList = props => {
  const renderList = () => {
    return props.tags.map(tag => {
      if (tag.url) {
        return (
          <li key={tag.title} className={classNames(style['tag__item'], style['tag__item--hasLink'])}>
            <a href={tag.url} className={classNames('a', style['tag__link'])}>{tag.title}</a>
          </li>
        );
      } else {
        return (
          <li key={tag.title} className={style['tag__item']}>
            {tag.title}
          </li>
        );
      }
    });
  };

  return (
    <ul className={style['tag__list']}>
      {renderList()}
    </ul>
  );
}

export default TagList;
