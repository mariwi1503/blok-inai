type HouseIconProps = {
  roofColor: string;
  doorColor: string;
};

/** Small house illustration: roof, walls, door, windows, and chimney. */
export function HouseIcon({ roofColor, doorColor }: HouseIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-full h-full drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="42" y="10" width="6" height="12" rx="1.5" fill={roofColor} opacity="0.8" />
      <path d="M6 28L32 6L58 28H6Z" fill={roofColor} />
      <rect x="12" y="27" width="40" height="32" rx="4" fill="#ffffff" stroke={roofColor} strokeWidth="2.5" />
      <path
        d="M26 43C26 40.7909 27.7909 39 30 39H34C36.2091 39 38 40.7909 38 43V59H26V43Z"
        fill={doorColor}
      />
      <circle cx="35.5" cy="50" r="1.2" fill="#ffffff" />
      <rect x="16" y="34" width="7" height="7" rx="1.5" fill={doorColor} opacity="0.4" />
      <rect x="41" y="34" width="7" height="7" rx="1.5" fill={doorColor} opacity="0.4" />
    </svg>
  );
}
