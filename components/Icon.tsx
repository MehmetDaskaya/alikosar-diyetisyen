import type { SVGProps } from "react";

/**
 * Line ikon seti. Tümü 24x24 grid, currentColor ile boyanır ve
 * bulunduğu metnin rengini/boyutunu alır. Emoji yerine bunları kullan.
 */
const strokeIcons: Record<string, React.ReactNode> = {
  leaf: (
    <>
      <path d="M4.5 19.5c0-8.5 6-14 15.5-15 1 9.5-4.5 15.5-13 15.5H4.5Z" />
      <path d="M4.5 19.5c4-1 7.5-3.5 10-7" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4.5v15M9 19.5h6M5 7.5h14" />
      <path d="M5 7.5 2 13.5a3 3 0 0 0 6 0Z" />
      <path d="M19 7.5l-3 6a3 3 0 0 0 6 0Z" />
      <circle cx="12" cy="4.5" r="1.3" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M6.5 6v12M3.2 8.5v7M17.5 6v12M20.8 8.5v7M6.5 12h11" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 2.5v6a4.5 4.5 0 0 0 9 0v-6" />
      <path d="M4.2 2.5h3.6M13.2 2.5h3.6" />
      <path d="M10.5 13v3a4.4 4.4 0 0 0 8.8 0v-1.6" />
      <circle cx="19.3" cy="12.3" r="2.1" />
    </>
  ),
  wheat: (
    <>
      <path d="M12 21V8.5" />
      <path d="M12 12.5c0-2.2 1.6-3.8 3.9-3.8-.2 2.2-1.8 3.8-3.9 3.8ZM12 12.5c0-2.2-1.6-3.8-3.9-3.8.2 2.2 1.8 3.8 3.9 3.8Z" />
      <path d="M12 8.2c0-2.2 1.6-3.8 3.9-3.8-.2 2.2-1.8 3.8-3.9 3.8ZM12 8.2c0-2.2-1.6-3.8-3.9-3.8.2 2.2 1.8 3.8 3.9 3.8Z" />
      <path d="M12 16.8c0-2.2 1.6-3.8 3.9-3.8-.2 2.2-1.8 3.8-3.9 3.8ZM12 16.8c0-2.2-1.6-3.8-3.9-3.8.2 2.2 1.8 3.8 3.9 3.8Z" />
    </>
  ),
  heart: <path d="M12 20.2S4.5 15.4 4.5 10.4A3.9 3.9 0 0 1 12 8.4a3.9 3.9 0 0 1 7.5 2c0 5-7.5 9.8-7.5 9.8Z" />,
  baby: (
    <>
      <circle cx="12" cy="11.5" r="6.5" />
      <path d="M9.7 10.3h.01M14.3 10.3h.01" />
      <path d="M9.8 14a3.4 3.4 0 0 0 4.4 0" />
      <path d="M12 5V3" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5.2A3.4 3.4 0 0 0 6.3 6.6 3 3 0 0 0 4.8 12a3 3 0 0 0 2.4 5.4A3.2 3.2 0 0 0 12 19V5.2Z" />
      <path d="M12 5.2a3.4 3.4 0 0 1 5.7 1.4A3 3 0 0 1 19.2 12a3 3 0 0 1-2.4 5.4A3.2 3.2 0 0 1 12 19" />
    </>
  ),
  dna: (
    <>
      <path d="M8 2.5c0 5 8 5 8 9.5s-8 4.5-8 9.5" />
      <path d="M16 2.5c0 5-8 5-8 9.5s8 4.5 8 9.5" />
      <path d="M9.5 6h5M8.4 9.5h7.2M8.4 14.5h7.2M9.5 18h5" />
    </>
  ),
  bowl: (
    <>
      <path d="M2.5 11h19a9.5 9.5 0 0 1-19 0Z" />
      <path d="M6.8 11a5.2 5.2 0 0 1 10.4 0" />
      <path d="M12 5.8V4" />
    </>
  ),
  phone: (
    <path d="M8.4 3H5.2A2.2 2.2 0 0 0 3 5.3C3 13.9 10.1 21 18.7 21a2.2 2.2 0 0 0 2.3-2.2v-3.2l-4.4-1.5-1.9 2.3a15.6 15.6 0 0 1-6.1-6.1l2.3-1.9L8.4 3Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 5.5L20.5 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 6.8V12l3.6 2.1" />
    </>
  ),
  check: <path d="m4.8 12.4 4.9 4.9L19.4 7.6" />,
  cross: <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />,
  alert: (
    <>
      <path d="M12 3.6 21.4 20H2.6L12 3.6Z" />
      <path d="M12 9.5v4.4M12 17.2h.01" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.6" />
      <path d="M8.4 13.6 7 21.2l5-2.6 5 2.6-1.4-7.6" />
    </>
  ),
  graduation: (
    <>
      <path d="M2.5 9 12 4.6 21.5 9 12 13.4 2.5 9Z" />
      <path d="M6.3 10.8v4.9c0 1.7 2.6 3 5.7 3s5.7-1.3 5.7-3v-4.9" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.8" y="7.2" width="18.4" height="12.6" rx="2.2" />
      <path d="M8.6 7.2V5.6a2 2 0 0 1 2-2h2.8a2 2 0 0 1 2 2v1.6M2.8 12.2h18.4" />
    </>
  ),
  book: (
    <>
      <path d="M3.5 4.6A1.6 1.6 0 0 1 5.1 3h4.4A2.5 2.5 0 0 1 12 5.5v14a2.5 2.5 0 0 0-2.5-1.6H5.1a1.6 1.6 0 0 1-1.6-1.6V4.6Z" />
      <path d="M20.5 4.6A1.6 1.6 0 0 0 18.9 3h-4.4A2.5 2.5 0 0 0 12 5.5v14a2.5 2.5 0 0 1 2.5-1.6h4.4a1.6 1.6 0 0 0 1.6-1.6V4.6Z" />
    </>
  ),
  map: (
    <>
      <path d="m9 4-6 2.5v14L9 18l6 2.5 6-2.5v-14L15 6.5 9 4Z" />
      <path d="M9 4v14M15 6.5v14" />
    </>
  ),
  quote: (
    <path d="M9.5 6.5C6.9 7.6 5.5 9.6 5.5 12.4v5.1h5.2v-5.1H8.3c0-1.6.6-2.7 2-3.4l-.8-2.5Zm9 0c-2.6 1.1-4 3.1-4 5.9v5.1h5.2v-5.1h-2.4c0-1.6.6-2.7 2-3.4l-.8-2.5Z" />
  ),
  arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
  arrowLeft: <path d="M19 12H5M12 19l-7-7 7-7" />,
  camera: (
    <>
      <path d="M3 8.5h3.4l1.5-2.4h8.2l1.5 2.4H21a1.5 1.5 0 0 1 1.5 1.5v7.6A1.5 1.5 0 0 1 21 19H3a1.5 1.5 0 0 1-1.5-1.5V10A1.5 1.5 0 0 1 3 8.5Z" />
      <circle cx="12" cy="13.5" r="3.4" />
    </>
  ),
};

const solidIcons: Record<string, React.ReactNode> = {
  star: <path d="m12 3.2 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.2Z" />,
  instagram: (
    <>
      <path
        d="M7.6 2.5h8.8a5.1 5.1 0 0 1 5.1 5.1v8.8a5.1 5.1 0 0 1-5.1 5.1H7.6a5.1 5.1 0 0 1-5.1-5.1V7.6a5.1 5.1 0 0 1 5.1-5.1Zm0 2a3.1 3.1 0 0 0-3.1 3.1v8.8a3.1 3.1 0 0 0 3.1 3.1h8.8a3.1 3.1 0 0 0 3.1-3.1V7.6a3.1 3.1 0 0 0-3.1-3.1H7.6Z"
        fillRule="evenodd"
      />
      <path d="M12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" fillRule="evenodd" />
      <circle cx="17.3" cy="6.7" r="1.2" />
    </>
  ),
  facebook: (
    <path d="M13.6 21v-8.2h2.8l.42-3.2h-3.22V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.13A22.6 22.6 0 0 0 14.4 3c-2.46 0-4.14 1.5-4.14 4.26V9.6H7.4v3.2h2.86V21h3.34Z" />
  ),
  whatsapp: (
    <path d="M12.04 2.5a9.4 9.4 0 0 0-8.03 14.3L2.5 21.5l4.85-1.47A9.4 9.4 0 1 0 12.04 2.5Zm0 1.94a7.46 7.46 0 1 1-3.9 13.82l-.32-.2-2.6.79.8-2.54-.21-.33a7.46 7.46 0 0 1 6.23-11.54Zm-3.2 3.72c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.13.17 1.75 2.78 4.3 3.79 2.12.83 2.55.67 3.01.63.46-.04 1.49-.6 1.7-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29-.25-.13-1.49-.73-1.72-.81-.23-.09-.4-.13-.57.12-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25a7.6 7.6 0 0 1-1.4-1.74c-.14-.25-.01-.38.11-.5.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.37-.77-1.87-.2-.47-.4-.41-.55-.42h-.47Z" />
  ),
  x: (
    <path d="M17.3 3h3.1l-6.77 7.73L21.7 21h-6.2l-4.86-6.35L5.08 21H1.97l7.24-8.27L2 3h6.36l4.39 5.8L17.3 3Zm-1.09 16.1h1.72L7.87 4.8H6.03l10.18 14.3Z" />
  ),
};

export type IconName = keyof typeof strokeIcons | keyof typeof solidIcons;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number | string;
  strokeWidth?: number;
}

export default function Icon({ name, size = "1em", strokeWidth = 1.6, ...rest }: IconProps) {
  const solid = solidIcons[name];
  const content = solid ?? strokeIcons[name];

  if (!content) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth={solid ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {content}
    </svg>
  );
}

/** Danışan yorumlarında kullanılan 5 yıldızlı derece göstergesi. */
export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span className={className} role="img" aria-label={`${count} üzerinden 5 yıldız`}>
      {Array.from({ length: count }, (_, i) => (
        <Icon key={i} name="star" />
      ))}
    </span>
  );
}
