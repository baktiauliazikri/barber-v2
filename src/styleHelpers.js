// Style-string builders — ported verbatim from `project/Kontur Booking v2.dc.html`
// so the visual output stays pixel-identical to the source prototype.

export const dot = (on) =>
  `width:20px;height:20px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;border:1px solid ${on ? '#0b0b0b' : '#c4c4c4'};background:${on ? '#0b0b0b' : 'transparent'};color:${on ? '#ffffff' : 'transparent'}`;

export const card = (on) =>
  `border:1px solid ${on ? '#0b0b0b' : '#d4d4d4'};border-left:${on ? '5px' : '1px'} solid ${on ? '#0b0b0b' : '#d4d4d4'};background:#ffffff;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .16s ease`;

export const chip = (on) =>
  `padding:8px 12px;font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:.16em;cursor:pointer;transition:all .16s ease;border:1px solid ${on ? '#0b0b0b' : '#d4d4d4'};background:${on ? '#0b0b0b' : '#ffffff'};color:${on ? '#ffffff' : '#5c5c5c'}`;

export const sw = (on) =>
  `width:40px;height:22px;background:${on ? '#0b0b0b' : '#ffffff'};border:1px solid ${on ? '#0b0b0b' : '#c4c4c4'};padding:2px;display:flex;justify-content:${on ? 'flex-end' : 'flex-start'};transition:all .16s ease;flex-shrink:0`;

export const knob = (on) =>
  `width:16px;height:16px;background:${on ? '#ffffff' : '#c4c4c4'}`;
