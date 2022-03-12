import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import styles from './directory.module.css';

export const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className={styles['directory-menu-container']}>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
