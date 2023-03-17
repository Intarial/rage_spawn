import React from 'react';
import styles from './FooterInteraction.module.scss';
import { Filter } from '@components/Filter/Filter';
import { IconHouse, IconLastPosition } from '@ui/Icons/Icons';
import { ISpawns } from '../../Spawn';
import { Trigger } from '../../rage/triggers';

export const FooterInteraction: React.FC<{ spawn?: ISpawns }> = ({ spawn }) => {
  return (
    <div className={ styles.wrapper } >
      <button
        onClick={ () => Trigger.spawnToPoint(spawn) }
        className={ [
          styles.spawnToPoint, spawn && styles.spawnToPointActive
        ].join(' ') }
      >
        <p>Появиться в выбранной точке</p>
        { spawn && spawn.length > 0 && <Filter.Gradient mouse={{ onMouseMove: true }} /> }
      </button>
      <div className={ styles.contentSpawnBlock }>
        <button
          onClick={ () => Trigger.spawnToPoint('house') }
          className={ styles.spawnBlock }
        >
          <Filter.Gradient />
          <IconHouse />
        </button>
        <div className={ styles.hideName }>
          Дома
        </div>
      </div>
      <div className={ styles.contentSpawnBlock }>
        <button
          onClick={ () => Trigger.spawnToPoint('last:position') }
          className={ styles.spawnBlock }
        >
          <Filter.Gradient />
          <IconLastPosition />
        </button>
        <div className={ styles.hideName }>
          На месте выхода
        </div>
      </div>
    </div>
  );
};