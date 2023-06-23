"use client";
import styles from "../css/accountItem.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4b2b82410ed1bb9c53239f6a5938202e~c5_300x300.webp?x-expires=1687586400&x-signature=3Pxf3cChfuwtSlfcTc6cSGvXxZo%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen duc Quan</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>NguyenducQuan</span>
      </div>
    </div>
  );
};

export default AccountItem;
