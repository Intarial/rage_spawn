import React from 'react';
import styles from './Title.module.scss';

import { IconLocation } from '@ui/Icons/Icons';

export const Title: React.FC = () => {
  return (
    <div className={ styles.wrapper } >
      <div className={ styles.icon }>
        <IconLocation />
      </div>
      <div className={ styles.textContent }>
        <h1>ТОЧКА ПОЯВЛЕНИЯ</h1>
        <p>Вы можете выбрать место появления своего
          персонажа, просто выберите его на карте</p>
      </div>
    </div>
  );
};