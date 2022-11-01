import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, more }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('label')}>{label}</span>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>{more}</p>
        </div>
    );
}

export default SuggestedAccounts;
