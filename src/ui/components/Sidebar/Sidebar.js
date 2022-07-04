import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { MenuList } from "./MenuList";

import "../../../App.css";

const styles = StyleSheet.create({
  container: {
    height: "37.5rem",
  },
  content: {
    marginTop: 54,
  },
  mainBlock: {
    padding: 30,
  },
});

export class Sidebar extends React.Component {
  state = { selectedItem: "Inicio" };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row className={css(styles.container)}>
        <MenuList
          selectedItem={selectedItem}
          onChange={(selectedItem) => this.setState({ selectedItem })}
        />
        <Column flexGrow={1} className={css(styles.mainBlock)}></Column>
      </Row>
    );
  }
}
