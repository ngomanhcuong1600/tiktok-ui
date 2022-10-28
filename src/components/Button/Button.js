import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    lefticon,
    righticon,
    onClick,
    ...passProps
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classname = cx('wrapper', {
        primary,
        outline,
        rounded,
        disabled,
        small,
        large,
        lefticon,
        righticon,
    });

    return (
        <Component className={classname} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
