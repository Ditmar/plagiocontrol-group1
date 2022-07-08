import React from "react";
import { bool, func,string } from "prop-types";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  activeBar: {
    borderLeft: "3px solid #DDE2FF",
  },
  activeTitle: {
    color: "#DDE2FF",
  },
  container: {
    display: "flex",
    height: 56,
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(221,226,255, 0.08)",
    },
    paddingLeft: 32,
    paddingRight: 32,
    transition: "background-color 0.425s ease-in-out",
  },
  title: {
    fontFamily: "Muli",
    fontSize: 16,
    lineHeight: "1.25rem",
    letterSpacing: "0.01rem",
    color: "#A4A6B3",
    marginLeft: 24,
  },
});

export const  MenuItemComponent = (props) => {
    const { active, icon, title, ...otherProps } = props;
    const Icon = icon;
  return (
    <Column>
      <Row
        vertical="center"
        {...otherProps}
        className={`${css(styles.container, active && styles.activeBar)}`}
      >
        <Icon
          fill={active ? "#DDE2FF" : "#9FA2B4"}
          opacity={!active && "0.4"}
        />
        <span className={css(styles.title, active && styles.activeTitle)}>
          {title}
        </span>
      </Row>
    </Column>
  );
}

MenuItemComponent.propTypes = {
  active: bool,
  icon: func,
  title: string,
};


