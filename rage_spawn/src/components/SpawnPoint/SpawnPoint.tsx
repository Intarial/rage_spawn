import React, { useState } from 'react';
import styles from './SpawnPoint.module.scss';

import { Filter } from '@components/Filter/Filter';
import { IconLocation } from '@ui/Icons/Icons';

interface ISpawnPoint {
  position: { x: number, y: number }
  name: string
  active: boolean
  click: () => void
}

export const SpawnPoint: React.FC<ISpawnPoint> = ({ position, name, active, click }) => {
  const [gradient, setGradient] = useState(false);

  const windowHeight = window.innerHeight;
  const ratio = windowHeight / 1080;

  return (
    <div
      onMouseMove={ () => setGradient(true) }
      onMouseLeave={ () => setGradient(false) }
      onClick={ click }
      className={ styles.wrapper }
      style={{
        left: (position.x * ratio / windowHeight * 100) + 'vh',
        top: (position.y * ratio / windowHeight * 100) + 'vh'
      }}
    >
      <div className={ styles.icon }>
        <Filter.Gradient
          mouse={{ onMouseMove: gradient ? true : active }}
        />
        <IconLocation />
      </div>
      <div className={ styles.textInfo }>
        <span>Точка появления:</span>
        <p>{ name }</p>
      </div>
    </div>
  );
};