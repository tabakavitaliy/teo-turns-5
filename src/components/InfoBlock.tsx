import type { ReactNode } from 'react';

interface InfoBlockProps {
  icon: string;
  label: string;
  value: string | ReactNode;
  onClick?: () => void;
  clickable?: boolean;
}

export const InfoBlock = ({ icon, label, value, onClick, clickable }: InfoBlockProps) => {
  return (
    <div 
      className={`info-block ${clickable ? 'clickable' : ''}`}
      onClick={onClick}
      style={clickable ? { cursor: 'pointer' } : undefined}
    >
      <span className="info-icon">{icon}</span>
      <div>
        <div className="info-label">{label}</div>
        <div className="info-value">{value}</div>
      </div>
    </div>
  );
};
