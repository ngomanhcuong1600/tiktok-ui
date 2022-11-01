import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('account-img')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667354400&x-signature=ZXdeQhJkbFiskD%2FZrpR3Z7ndtCg%3D"
            />
            <div className={cx('account-container')}>
                <h3 className={cx('account-heading')}>
                    theanh28entertainment
                    <FontAwesomeIcon
                        className={cx('account-icon')}
                        icon={faCheckCircle}
                    />
                </h3>
                <span className={cx('account-name')}>
                    Theanh28 Entertainment
                </span>
            </div>
        </div>
    );
}

export default AccountItem;
