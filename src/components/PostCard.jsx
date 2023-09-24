import styles from './PostCard.module.css';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function PostCard({ src, date, title, id }) {
  return (
    <Link to={`/${id}`}>
      <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <img loading='lazy' src={src} className={styles.cardImage} />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardDate}>{date}</p>
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.cardAction}>
            <span>View Blog Post</span>
            <ArrowForwardIcon className={styles.arrow} />
          </div>
        </div>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  src: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};