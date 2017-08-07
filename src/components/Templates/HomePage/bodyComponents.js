/* eslint-disable react/no-multi-comp */
import React from "react";

import P from "Elements/P";
import Ul from "Elements/Ul";
import Li from "Elements/Li";
import Link from "Elements/Link";
import Spacer from "Elements/Spacer";
import Title from "Elements/Title";
import TooltipIcon from "Elements/TooltipIcon";

const bodyComponents = {
  Icon: TooltipIcon,
  Spacer,
  h1: Title,
  h2: ownProps => <Title level={2} {...ownProps} />,
  p: P,
  a: ownProps => {
    const { href, ...otherProps } = ownProps;
    return <Link to={href} {...otherProps} />;
  },
  ul: Ul,
  li: Li
};

export default bodyComponents;
