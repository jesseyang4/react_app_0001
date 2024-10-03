import React, { useState, ReactNode } from 'react';
import './Collapsible.css'; // Import your CSS file

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapsible" style={{marginTop: "0px"}}>
      <div className="collapsible-header" onClick={toggle}>
        <span className={`chevron ${isOpen ? 'up' : 'down'}`} />
        <p className="p_text_header_white">{title}</p>
      </div>
      <div className={`collapsible-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible;

