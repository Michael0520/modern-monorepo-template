// Util Imports
import { cn } from '@repo/shared/lib/utils';

import LogoSvg from '@/assets/svg/logo';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoSvg className="size-8.5" />
      <span className="text-xl font-semibold">My App</span>
    </div>
  );
};

export default Logo;
