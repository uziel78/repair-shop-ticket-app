import { LucideIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

// * This component is used to render a button with an icon and an optional link. It uses the Button component from the UI library and the LucideIcon type for the icon prop.
export function NavButton({ icon: Icon, label, href }: Props) {
  return (
    <Button
      variant='ghost'
      size='icon'
      aria-label={label}
      title={label}
      className='rounded-full'
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}
