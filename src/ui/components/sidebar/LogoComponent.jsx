import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Logo from './assets/icon-logo';


const styles = StyleSheet.create({
    container: {
      marginLeft: 32,
      marginRight: 32,
    },
    title: {
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 19,
      lineHeight: "1.5rem",
      letterSpacing: "0.025rem",
      color: "#A4A6B3",
      opacity: 0.7,
      marginLeft: 12,
    },
  });
  

export const LogoComponent = ()  =>{
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            <Logo />
            <span className={css(styles.title)}>Plagio Control</span>
        </Row>
    );
}


