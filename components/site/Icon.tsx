import type { CSSProperties, ReactNode } from "react";

/**
 * Icônes au trait façon Lucide (stroke 2, bouts arrondis, 24x24, currentColor).
 * Reprises telles quelles depuis le design system de référence (jeanne-website)
 * pour rester sans dépendance et pixel-fidèles. Aucun emoji, aucune icône
 * remplie sauf point de statut.
 */
const ICONS: Record<string, ReactNode> = {
  check: <polyline points="20 6 9 17 4 12" />,
  arrowRight: (
    <g>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </g>
  ),
  calendar: (
    <g>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </g>
  ),
  fileText: (
    <g>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </g>
  ),
  shield: (
    <g>
      <path d="M12 2l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V5z" />
      <polyline points="9 12 11 14 15 10" />
    </g>
  ),
  clock: (
    <g>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </g>
  ),
  message: (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  ),
  mail: (
    <g>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </g>
  ),
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  chevronRight: <polyline points="9 6 15 12 9 18" />,
  upload: (
    <g>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </g>
  ),
  lock: (
    <g>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </g>
  ),
  scale: (
    <g>
      <path d="M12 3v18" />
      <path d="M6 21h12" />
      <path d="M5 7h14l3 5a3.5 3.5 0 0 1-6 0z" />
      <path d="M5 7l-3 5a3.5 3.5 0 0 0 6 0z" />
    </g>
  ),
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  plus: (
    <g>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </g>
  ),
  minus: <line x1="5" y1="12" x2="19" y2="12" />,
  mapPin: (
    <g>
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </g>
  ),
  globe: (
    <g>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </g>
  ),
  cpu: (
    <g>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <line x1="10" y1="2" x2="10" y2="5" />
      <line x1="14" y1="2" x2="14" y2="5" />
      <line x1="10" y1="19" x2="10" y2="22" />
      <line x1="14" y1="19" x2="14" y2="22" />
      <line x1="2" y1="10" x2="5" y2="10" />
      <line x1="2" y1="14" x2="5" y2="14" />
      <line x1="19" y1="10" x2="22" y2="10" />
      <line x1="19" y1="14" x2="22" y2="14" />
    </g>
  ),
  linkedin: (
    <g>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </g>
  ),
  bookOpen: (
    <g>
      <path d="M12 7v14" />
      <path d="M3 5h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6v13h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3H3z" />
    </g>
  ),
  menu: (
    <g>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </g>
  ),
  x: (
    <g>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </g>
  ),
  download: (
    <g>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </g>
  ),
  arrowLeft: (
    <g>
      <line x1="20" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </g>
  ),
  building: (
    <g>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <line x1="9" y1="8" x2="9" y2="8" />
      <line x1="15" y1="8" x2="15" y2="8" />
      <line x1="9" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="15" y2="12" />
      <path d="M10 21v-4h4v4" />
    </g>
  ),
  handshake: (
    <g>
      <path d="M11 17l2 2a1 1 0 0 0 1.4 0l3.6-3.6" />
      <path d="M2 12l3-3 5 5-2 2a1.4 1.4 0 0 1-2 0z" />
      <path d="M22 12l-3-3-5 5" />
      <path d="M5 9l3-3 4 1 4-1 3 3" />
    </g>
  ),
  graduationCap: (
    <g>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </g>
  ),
};

export type IconName = keyof typeof ICONS | string;

export function Icon({
  name,
  size = 20,
  stroke = 2,
  color = "currentColor",
  style,
}: {
  name: IconName;
  size?: number;
  stroke?: number;
  color?: string;
  style?: CSSProperties;
}) {
  const node = ICONS[name];
  if (!node) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: "none", ...style }}
      aria-hidden="true"
    >
      {node}
    </svg>
  );
}
