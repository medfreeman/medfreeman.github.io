/* eslint-disable react/no-multi-comp */
import React from "react";

import Link from "Elements/Link";
import Spacer from "Elements/Spacer";
import Title from "Elements/Title";
import TooltipIcon from "Elements/TooltipIcon";

import styles from "./index.css";
import tooltipIconTheme from "./tooltipIcon.css";

const bodyComponents = {
  Icon: ownProps => <TooltipIcon theme={tooltipIconTheme} {...ownProps} />,
  Spacer: ownProps => <Spacer {...ownProps} />,
  h1: ownProps =>
    <Title className={styles.h1} spanClass={styles.h1__text} {...ownProps} />,
  h2: ownProps =>
    <Title
      className={styles.h2}
      spanClass={styles.h2__text}
      level={2}
      {...ownProps}
    />,
  p: ownProps => <p className={styles.text} {...ownProps} />,
  a: ownProps => {
    const { href, ...otherProps } = ownProps;
    return <Link to={href} {...otherProps} />;
  },
  ul: ownProps => <ul className={styles.ul} {...ownProps} />,
  li: ownProps => <li className={styles.li} {...ownProps} />
};

export default bodyComponents;
