import React from "react";
import { StyleSheet, css } from "aphrodite";
import {LogoComponent} from "./LogoComponent";
import {MenuItemComponent} from "./MenuItemComponent";
import IconOverview from "./assets/icon-overview.js";
import IconTickets from "./assets/icon-tickets.js";
import IconIdeas from "./assets/icon-ideas.js";
import IconContacts from "./assets/icon-contacts";
import IconAgents from "./assets/icon-agents";
import IconArticles from "./assets/icon-articles";
import IconSettings from "./assets/icon-settings";
import useSidebar from "./useSidebar";
import { Column } from "simple-flexbox";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363740",
    width: 260,
    paddingTop: 32,
  },
  menuItemList: {
    marginTop: 52,
  },
  separator: {
    borderTop: "0.063rem solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});

export const ListItemsComponent = () => {
  const { isActive, onMenuItemClicked } = useSidebar({
    defaultPath: "/",
  });

  return (
    <Column className={css(styles.container)}>
      <LogoComponent />

      <Column className={css(styles.menuItemList)}>
        <MenuItemComponent
          title="Inicio"
          icon={IconOverview}
          onClick={() => onMenuItemClicked("/")}
          active={isActive("/")}
        />
        <MenuItemComponent
          title="Trabajos"
          icon={IconTickets}
          onClick={() => onMenuItemClicked("/works")}
          active={isActive("/works")}
        />
        <MenuItemComponent
          title="Revisar Tesis"
          icon={IconIdeas}
          onClick={() => onMenuItemClicked("/review")}
          active={isActive("/review")}
        />
        <MenuItemComponent
          title="Listar Tesis"
          icon={IconContacts}
          onClick={() => onMenuItemClicked("/list-docs")}
          active={isActive("/list-docs")}
        />
        <MenuItemComponent
          title="Publicar Tesis"
          icon={IconAgents}
          onClick={() => onMenuItemClicked("/public")}
          active={isActive("/public")}
        />
        <MenuItemComponent
          title="Reportes Generales"
          icon={IconArticles}
          onClick={() => onMenuItemClicked("/reports")}
          active={isActive("/reports")}
        />
        <div className={css(styles.separator)}></div>
        <MenuItemComponent
          title="Ajustes"
          icon={IconSettings}
          onClick={() => onMenuItemClicked("/settings")}
          active={isActive("/settings")}
        />
      </Column>
    </Column>
  );
}


