"use client";
import Link from "next/link";
import styles from "../css/button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  icon = false,
  small = false,
  large = false,
  Children,
  onClick,
  ...passProps
}) => {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    icon
  });
  return (
    <Comp className={classes} {...props}>
      <span>{Children}</span>
    </Comp>
  );
};

export default Button;
