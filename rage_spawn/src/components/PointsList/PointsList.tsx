import React  from 'react';
import styles from './PointsList.module.scss';
import { SpawnPoint } from '@components/SpawnPoint/SpawnPoint';

import configPoints from '../../configs/SpawnPoints.json';
import config from '../../configs/config.json';

import { CharacterContext, ISpawns } from '../../Spawn';

interface IPointsList {
  activeSpawn: ISpawns | undefined
  setActiveSpawn: (trigger: ISpawns) => void
}

export const PointsList: React.FC<IPointsList> = ({ activeSpawn, setActiveSpawn }) => {

  const updateActivePoint = (trigger: ISpawns) => {
    if (trigger === activeSpawn) return;
    setActiveSpawn(trigger);
  };

  const filterOrganization = (trigger: ISpawns) => {
    return configPoints.filter(point => point.trigger === trigger)[0];
  };

  return (
    <CharacterContext.Consumer>
      {
        character => (
          <div className={ styles.pointSpawns }>
            {
              config.spawnAirport && (
                <SpawnPoint
                  click={
                    () => updateActivePoint('airport')
                  }
                  active={
                    activeSpawn === 'airport'
                  }
                  position={
                    filterOrganization('airport').position
                  }
                  name='Аэропорт'
                />
              )
            }
            {
              config.spawnOrganization && character.info.organization && (
                <SpawnPoint
                  click={
                    () => character.info.organization && updateActivePoint(character.info.organization)
                  }
                  active={
                    activeSpawn === character.info.organization
                  }
                  position={
                    filterOrganization(character.info.organization).position
                  }
                  name={
                    filterOrganization(character.info.organization).name
                  }
                />
              )
            }
          </div>
        )
      }
    </CharacterContext.Consumer>
  );
};