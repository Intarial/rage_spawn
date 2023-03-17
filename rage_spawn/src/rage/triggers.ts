import { ISpawns } from '../Spawn';

const spawnToPoint = (spawn: ISpawns | undefined) => {
  if (!spawn) return;
  //@ts-ignore
  global.mp.trigger('EVENT:NAME', spawn);
};

export const Trigger = {
  spawnToPoint
};