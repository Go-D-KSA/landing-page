import { cn } from "@/lib/utils";

export function RideCar({ className }: { className?: string }) {
  return (
    <svg className={cn("ride-car-svg", className)} viewBox="0 0 280 100" role="img" aria-label="Go D sports car">
      <ellipse cx="178" cy="88" rx="86" ry="5" fill="#000" opacity=".3" />

      <g fill="currentColor">
        <path d="M4 37h82l-14 9H4Z" opacity=".95" />
        <path d="M25 54h55l4 9H25Z" opacity=".78" />
        <path d="M48 70h39l3 8H48Z" opacity=".58" />
      </g>

      <path
        d="M83 69 77 47c-1-5 2-9 7-11l24-8 25-18c7-5 15-7 24-7h27c12 0 24 4 33 12l22 19 26 4c10 1 15 7 14 16l-3 15h-18c-2-14-11-22-25-22s-23 8-26 22h-61c-3-14-12-22-26-22s-23 8-25 22H83Z"
        fill="#050807"
        stroke="#F4FBF6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m116 27 24-16c5-3 10-4 16-4h10l-4 24-46-4Zm53-20h13c10 0 19 3 27 10l16 14-57-1 1-23Z" fill="#F4FBF6" />
      <path d="M164 8 160 31m66 1 15 3" fill="none" stroke="#A8C1B3" strokeWidth="2" strokeLinecap="round" />
      <path d="M87 40c54-10 109-11 166-2" fill="none" stroke="#8FF5B9" strokeWidth="1.5" strokeLinecap="round" opacity=".85" />
      <path d="M248 41h17c6 2 9 5 10 9l-29-3 2-6Z" fill="#F5D878" />
      <path d="M79 44h17l-4 8H79Z" fill="#F05C4F" />

      {[120, 233].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="69" r="20" fill="#050807" stroke="#F4FBF6" strokeWidth="4" />
          <circle cx={cx} cy="69" r="11" fill="#F4FBF6" />
          <circle cx={cx} cy="69" r="4" fill="#00A651" />
        </g>
      ))}
    </svg>
  );
}
