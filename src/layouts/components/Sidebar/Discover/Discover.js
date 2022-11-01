import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>Discover</h3>
            <div className={cx('content')}>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faHashtag} />
                    <span className={cx('name')}>suthatla</span>
                </a>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faHashtag} />
                    <span className={cx('name')}>mackedoi</span>
                </a>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faHashtag} />
                    <span className={cx('name')}>sansangthaydoi</span>
                </a>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                    <span className={cx('name')}>
                        Yêu Đơn Phương Là Gì (MEE Remix)
                    </span>
                </a>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                    <span className={cx('name')}>
                        Thiên Thần Tình Yêu - RICKY STAR
                    </span>
                </a>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faHashtag} />
                    <span className={cx('name')}>7749 hieuung</span>
                </a>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faHashtag} />
                    <span className={cx('name')}>genzlife</span>
                </a>
                <a className={cx('item')} href="/">
                    <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                    <span className={cx('name')}>
                        Tình Đã Đầy Một Tim - Huyết Tâm Môn
                    </span>
                </a>
            </div>
        </div>
    );
}

export default Discover;
