"use client";
import styles from "../css/header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import AccountItem from "./AccountItem";
import Button from "./Button";

const cx = classNames.bind(styles);

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div>
          <img
            src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-White-Dark-Background-Logo.wine.svg"
            alt="tiktok"
            className={cx("logo")}
          />
        </div>

        <Tippy
          interactive
          // visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <Wrapper>
                <h4 className={cx("search-title")}>Tài khoản</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Wrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <button className={cx("loading")}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>

            <span className={cx("span-search")}></span>

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("action")}>
          <Button text Children="Tải lên"></Button>
          <Button primary Children="Đăng nhập"></Button>
          <Button icon Children={<FontAwesomeIcon icon={faEllipsis} />}></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
