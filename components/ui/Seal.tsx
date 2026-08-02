import { cn } from '@/lib/utils';

/**
 * The registry seal — the signature element.
 *
 * Two of Bagas' products are registered as Indonesian intellectual property
 * (HKI) — the rarest line on this CV. It gets the one loud mark on the page:
 * a struck seal that turns slowly, in turmeric, over the ink ground. It
 * appears exactly once, in the hero.
 */
export function Seal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      role="img"
      aria-label="Two works registered as Indonesian intellectual property, 2025"
      className={cn('text-kunyit', className)}
    >
      <defs>
        <path
          id="seal-ring"
          d="M110,110 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
          fill="none"
        />
      </defs>

      <circle cx="110" cy="110" r="99" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <circle cx="110" cy="110" r="69" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <circle cx="110" cy="110" r="66" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

      <g className="origin-center animate-seal">
        <text
          fill="currentColor"
          fontSize="10.5"
          letterSpacing="3.9"
          style={{ fontFamily: 'var(--font-mono)', fontWeight: 500 }}
        >
          <textPath href="#seal-ring" startOffset="0">
            HAK KEKAYAAN INTELEKTUAL · TERDAFTAR 2025 ·
          </textPath>
        </text>
      </g>

      <text
        x="110"
        y="105"
        textAnchor="middle"
        fill="currentColor"
        fontSize="46"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
      >
        02
      </text>
      <text
        x="110"
        y="131"
        textAnchor="middle"
        fill="currentColor"
        fontSize="10"
        letterSpacing="5"
        opacity="0.75"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        HKI
      </text>
    </svg>
  );
}
