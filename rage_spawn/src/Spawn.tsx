import React, { createContext, useEffect, useState } from 'react';
import styles from './Spawn.module.scss';
import { Title } from '@components/Title/Title';
import { PointsList } from '@components/PointsList/PointsList';
import { FooterInteraction } from '@components/FooterInteraction/FooterInteraction';

export type ISpawns = 'ballas' | 'gov' | 'army' | 'sheriff' | 'airport' | 'house' | 'last:position'; // Update Points To src/config/SpawnPoints.json

interface ICharacter {
  house: boolean
  lastPosition: boolean
  organization?: ISpawns
}

export const CharacterContext = createContext<{ info: ICharacter, activeSpawn?: ISpawns }>({ info: {} as ICharacter });

function Spawn() {
  const [character, setCharacter] = useState<ICharacter>({ house: true, lastPosition: false, organization: undefined });
  const [activeSpawn, setActiveSpawn] = useState<ISpawns | undefined>();

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
        <FooterInteraction spawn={ activeSpawn } />
      </div>
      <PointsList
        activeSpawn={ activeSpawn }
        setActiveSpawn={ (trigger) => setActiveSpawn(trigger) }
      />
    </CharacterContext.Provider>
  );
}

export default Spawn;
