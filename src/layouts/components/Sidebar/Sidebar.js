import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
import { HomeIcon, LiveIcon, TwoHumanIcon } from '~/assets/icons';
import Footer from './Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    icon={<HomeIcon />}
                    title="For You"
                    to={config.routes.home}
                />
                <MenuItem
                    icon={<TwoHumanIcon />}
                    title="Following"
                    to={config.routes.following}
                />
                <MenuItem
                    icon={<LiveIcon />}
                    title="LIVE"
                    to={config.routes.live}
                />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" more="See all" />
            <SuggestedAccounts label="Following accounts" more="See more" />

            <Discover />

            <Footer />
        </div>
    );
}

export default Sidebar;
