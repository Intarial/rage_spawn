import React from 'react';
import styles from './Filter.module.scss';

interface IGradient {
  mouse?: { onMouseMove: boolean }
}

const Gradient: React.FC<IGradient> = ({ mouse }) => {
  return (
    <div className={ styles.gradient } style={ mouse && { opacity: mouse.onMouseMove ? 1 : 0 } } />
  );
};


export const Filter = { Gradient };