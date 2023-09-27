import styles from './PostCard.module.css';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function PostCard({ src, date, title, slug }) {
  return (
    <Link className={styles.postLink} to={`/posts/${slug}`}>
      <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <img loading='lazy' src={src} alt='' className={styles.cardImage} />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardDate}>{date}</p>
          <h1 className={styles.cardTitle}>{title}</h1>
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
  slug: PropTypes.string,
};
