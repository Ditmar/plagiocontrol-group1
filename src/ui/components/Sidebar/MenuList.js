import React from "react";
import { Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";
import IconInicio from "./assets/inicio.js";
import IconTrabajos from "./assets/trabajos.js";
import IconRevisar from "./assets/revisartesis.js";
import IconListar from "./assets/listartesis";
import IconPublicar from "./assets/publicartesis";
import IconReportes from "./assets/reportetesis";
import IconAjustes from "./assets/ajustes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363740",
    width: 255,
    paddingTop: 32,
  },
  menuItemList: {
    marginTop: 52,
  },
  separator: {
    borderTop: "1px solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});

export const MenuList = (props) => {
  return (
    <Column className={css(styles.container)}>
      <Logo />
      <Column className={css(styles.menuItemList)}>
        <MenuItem
          title="Inicio"
          icon={IconInicio}
          onClick={() => props.onChange("Inicio")}
          active={props.selectedItem === "Inicio"}
        />
        <MenuItem
          title="Trabajos"
          icon={IconTrabajos}
          onClick={() => props.onChange("Trabajos")}
          active={props.selectedItem === "Trabajos"}
        />
        <MenuItem
          title="Revisar Tesis"
          icon={IconRevisar}
          onClick={() => props.onChange("Revisar Tesis")}
          active={props.selectedItem === "Revisar Tesis"}
        />
        <MenuItem
          title="Listar Tesis"
          icon={IconListar}
          onClick={() => props.onChange("Listar Tesis")}
          active={props.selectedItem === "Listar Tesis"}
        />
        <MenuItem
          title="Publicar Tesis"
          icon={IconPublicar}
          onClick={() => props.onChange("Publicar Tesis")}
          active={props.selectedItem === "Publicar Tesis"}
        />
        <MenuItem
          title="Reportes Generales"
          icon={IconReportes}
          onClick={() => props.onChange("Reportes Generales")}
          active={props.selectedItem === "Reportes Generales"}
        />
        <div className={css(styles.separator)}></div>
        <MenuItem
          title="Ajustes"
          icon={IconAjustes}
          onClick={() => props.onChange("Ajustes")}
          active={props.selectedItem === "Ajustes"}
        />
      </Column>
    </Column>
  );
};
