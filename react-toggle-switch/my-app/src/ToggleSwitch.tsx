import './ToggleSwitch.css';

type Props = {
  label: string;
  toggleState: string;
  onToggle: () => void;
};

export function ToggleSwitch({ label, onToggle, toggleState }: Props) {
  return (
    <div className="container">
      <div id="toggle-switch" className={toggleState} onClick={onToggle}>
        <div id="slider" className={toggleState}>
          <div id="slider-inside" className={toggleState}></div>
          <div id="slider-inside" className={toggleState}></div>
        </div>
      </div>
      <span id="state-label">{label}</span>
    </div>
  );
}
