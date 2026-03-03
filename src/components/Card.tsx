import { Sparkles } from './Sparkles';
import { Header } from './Header';
import { InfoBlock } from './InfoBlock';
import { Cats } from './Cats';
import { RsvpSection } from './RsvpSection';
import { DirtLayer } from './DirtLayer';
import { addToCalendar } from '../utils/calendar';
import { openGoogleMaps } from '../utils/maps';

export const Card = () => {
  return (
    <div className="card">
      <Sparkles />
      
      <div className="pixel-border-top"></div>

      <Header />

      <div className="content">
        <InfoBlock 
          icon="📅"
          label="DATE"
          value="Saturday, March 28, 2026"
          onClick={addToCalendar}
          clickable={true}
        />

        <InfoBlock 
          icon="⏰"
          label="TIME"
          value="1:30 PM"
        />

        <InfoBlock 
          icon="📍"
          label="LOCATION"
          value={
            <>
              Lil' Kickers — LKSOCCER.COM<br />
              701 N. Milwaukee Ave.<br />
              Vernon Hills, IL 60061
            </>
          }
          onClick={openGoogleMaps}
          clickable={true}
        />
      </div>

      <Cats />
      <RsvpSection />
      <DirtLayer />
    </div>
  );
};
