import { Steve } from './Characters/Steve';
import { Alex } from './Characters/Alex';
import { Creeper } from './Characters/Creeper';
import { Wolf } from './Characters/Wolf';
import { Villager } from './Characters/Villager';

export const Header = () => {
  return (
    <div className="header">
      <span className="invite-text">⚔️ YOU'RE INVITED TO ⚔️</span>

      <div className="characters-row">
        <Steve />
        <Alex />
        <Creeper />
        <Wolf />
        <Villager />
      </div>

      <div className="name">TEO</div>
      <div className="turns-five">TURNS 5!</div>
      <div className="swords">⚔️ 🎂 ⚔️</div>
      <div className="subtitle">BIRTHDAY ADVENTURE</div>
    </div>
  );
};
