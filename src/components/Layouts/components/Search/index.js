import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountSearch from '~/components/AccountSearch';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShownResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }

        setLoading(true);

        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShownResult(false);
    };

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    {!!searchValue && (
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountSearch key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    )}
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    className={cx('input')}
                    placeholder="Search account and videos"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShownResult(true)}
                />
                <div className={cx('close')}>
                    {!!searchValue && !loading && (
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            onClick={handleClear}
                        />
                    )}
                </div>
                {loading && (
                    <div className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </div>
                )}
                <div className={cx('icon-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
