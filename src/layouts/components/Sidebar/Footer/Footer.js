import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <a className={cx('link')} href="/home">
                    About
                </a>
                <a className={cx('link')} href="/home">
                    Newsroom
                </a>
                <a className={cx('link')} href="/home">
                    Contact
                </a>
                <a className={cx('link')} href="/home">
                    Careers
                </a>
                <a className={cx('link')} href="/home">
                    ByteDance
                </a>
            </div>
            <div className={cx('container')}>
                <a className={cx('link')} href="/home">
                    TikTok for Good
                </a>
                <a className={cx('link')} href="/home">
                    Advertise
                </a>
                <a className={cx('link')} href="/home">
                    Developers
                </a>
                <a className={cx('link')} href="/home">
                    Transparency
                </a>
                <a className={cx('link')} href="/home">
                    TikTok Rewards
                </a>
                <a className={cx('link')} href="/home">
                    TikTok Browse
                </a>
                <a className={cx('link')} href="/home">
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('container')}>
                <a className={cx('link')} href="/home">
                    Help
                </a>
                <a className={cx('link')} href="/home">
                    Safety
                </a>
                <a className={cx('link')} href="/home">
                    Terms
                </a>
                <a className={cx('link')} href="/home">
                    Privacy
                </a>
                <a className={cx('link')} href="/home">
                    Creator Portal
                </a>
                <a className={cx('link')} href="/home">
                    Community Guidelines
                </a>
            </div>
            <div className={cx('container')}>
                <a className={cx('link')} href="/home">
                    © 2022 TikTok
                </a>
            </div>
        </div>
    );
}

export default Footer;
