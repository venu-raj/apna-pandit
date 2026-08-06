import { LucideProps } from "lucide-react";

const Icons = {
  icon: (props: LucideProps) => (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />

      <path
        d="M20.5 8.5C18.8 10 17.7 12.3 17.7 14.8C17.7 19.1 21.2 22.6 25.5 22.6C24 25.3 21.1 27 17.8 27C11.8 27 7 22.2 7 16.2C7 11.8 9.6 8 13.5 6.5"
        fill="currentColor"
      />

      <circle cx="23.5" cy="7" r="1.5" fill="currentColor" />

      <circle cx="27" cy="11" r="1" fill="currentColor" />

      <path
        d="M16 5L16.8 7.2L19 8L16.8 8.8L16 11L15.2 8.8L13 8L15.2 7.2L16 5Z"
        fill="currentColor"
      />
    </svg>
  ),

  wordmark: (props: LucideProps) => (
    <svg
      {...props}
      width="130"
      height="30"
      viewBox="0 0 130 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="22"
        fill="currentColor"
        fontSize="22"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        {process.env.NEXT_PUBLIC_APP_NAME}
      </text>
    </svg>
  ),

  wordmarkGradient: (props: LucideProps) => (
    <svg
      {...props}
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="astroGradient" x1="0" y1="0" x2="120" y2="30">
          <stop stopColor="#9333EA" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="22"
        fill="url(#astroGradient)"
        fontSize="22"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        {process.env.NEXT_PUBLIC_APP_NAME}
      </text>
    </svg>
  ),

  menu: (props: LucideProps) => (
    <svg
      {...props}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17M1 6H17M1 11H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default Icons;
