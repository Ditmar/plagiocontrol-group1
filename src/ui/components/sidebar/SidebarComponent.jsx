import React from "react";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { ListItemsComponent } from "./ListItemComponent";

import "../../../App.css";

const styles = StyleSheet.create({
  container: {
    height: "37.5rem",
  },
});

export const SidebarComponent = () => {
  return (
    <Row className={css(styles.container)}>
      <ListItemsComponent />
    </Row>
  );
};
