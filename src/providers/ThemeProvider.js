import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as CssThemrProvider } from "react-css-themr";

import PTheme from "../styles/P.css";
import UlTheme from "../styles/Ul.css";
import LiTheme from "../styles/Li.css";
import PageTheme from "../styles/Page.css";
import LinkTheme from "../styles/Link.css";
import TitleTheme from "../styles/Title.css";
import TooltipIconTheme from "../styles/TooltipIcon.css";

const contextTheme = {
  P: PTheme,
  Ul: UlTheme,
  Li: LiTheme,
  Page: PageTheme,
  Link: LinkTheme,
  Title: TitleTheme,
  TooltipIcon: TooltipIconTheme
};

const ThemeProvider = props =>
  <CssThemrProvider theme={contextTheme}>
    {props.children}
  </CssThemrProvider>;

ThemeProvider.propTypes = {
  children: PropTypes.element
};

export default ThemeProvider;
