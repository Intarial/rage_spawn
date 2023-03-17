import React, { createContext, useEffect, useState } from 'react';
import styles from './Spawn.module.scss';
import { Title } from '@components/Title/Title';
import { SpawnPoint } from '@components/SpawnPoint/SpawnPoint';

import configPoints from './configs/SpawnPoints.json';

type IOrganizations = 'ballas' | 'gov' | 'army' | 'sheriff'; // Update Points To src/config/SpawnPoints.json

interface ICharacter {
  house: boolean
  lastPosition: boolean
  organization?: IOrganizations
}

export const CharacterContext = createContext<{ info: ICharacter }>({ info: {} as ICharacter });

function Spawn() {
  const [character, setCharacter] = useState<ICharacter>({ house: true, lastPosition: false, organization: 'ballas' });

  useEffect(() => {
    // @ts-ignore
    if (global.mp) {
      // @ts-ignore
      global.mp.events.add('EVENT:NAME', (data: string) => {  // JSON.STRINGIFY OBJECT ICharacter Interface
        const info: ICharacter = JSON.parse(data);
        setCharacter(info);
      });
    }
  });

  return (
    <CharacterContext.Provider value={{ info: character }}>
      <div className={ styles.wrapper }>
        <Title />
        <div className={ styles.pointSpawns }>
          <SpawnPoint
            position={
              configPoints.filter(point => point.trigger === 'airport')[0].position
            }
            name='Аэропорт'
          />
          {
            character.organization && (
              <SpawnPoint
                position={
                  configPoints.filter(point => point.trigger === character.organization)[0].position
                }
                name={
                  configPoints.filter(point => point.trigger === character.organization)[0].name
                }
              />
            )
          }
        </div>
      </div>
    </CharacterContext.Provider>
  );
}

export default Spawn;
