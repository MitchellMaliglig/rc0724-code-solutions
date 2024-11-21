import { createPortal } from 'react-dom';
import './App.css';
import { ReactNode } from 'react';

type popupProps = {
  isOpen: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: string;
};

export function Popup({
  isOpen,
  positionTo,
  onClose,
  children,
  opacity,
}: popupProps) {
  if (!isOpen) {
    return null;
  }

  if (!opacity) {
    opacity = '50%';
  }

  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} style={{ opacity }}></div>
      <div style={{ top, left }} className="container">
        {children}
      </div>
    </>,
    document.body
  );
}
