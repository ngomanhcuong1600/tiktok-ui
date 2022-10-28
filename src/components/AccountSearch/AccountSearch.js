import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountSearch.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountSearch({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('image')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <span className={cx('name')}>
                    <h4 className={cx('nickname')}>{data.nickname}</h4>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </span>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountSearch.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountSearch;
