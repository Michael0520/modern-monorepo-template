import type { SVGAttributes } from 'react';

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      fill="none"
      height="1em"
      viewBox="0 0 328 329"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect className="dark:fill-white" fill="black" height="328" rx="164" width="328" y="0.5" />
      <path
        className="dark:stroke-black"
        d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288"
        stroke="white"
        strokeWidth="20"
      />
      <path
        className="dark:stroke-black"
        d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771"
        stroke="white"
        strokeWidth="20"
      />
      <line
        className="dark:stroke-black"
        stroke="white"
        strokeWidth="20"
        x1="238.136"
        x2="196.76"
        y1="98.8184"
        y2="139.707"
      />
      <line
        className="dark:stroke-black"
        stroke="white"
        strokeWidth="20"
        x1="135.688"
        x2="94.3128"
        y1="200.957"
        y2="241.845"
      />
      <line
        className="dark:stroke-black"
        stroke="white"
        strokeWidth="20"
        x1="133.689"
        x2="92.5566"
        y1="137.524"
        y2="96.3914"
      />
      <line
        className="dark:stroke-black"
        stroke="white"
        strokeWidth="20"
        x1="237.679"
        x2="196.547"
        y1="241.803"
        y2="200.671"
      />
    </svg>
  );
};

export default Logo;
