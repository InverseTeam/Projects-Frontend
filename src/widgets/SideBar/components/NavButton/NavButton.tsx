import { FC, useState } from 'react';
import { INavButtonProps } from './NavButton.declaration';
import Link from 'next/link';
import { StyledLabel, StyledNavButton } from './NavButton.styles';

import { IconsNavigation } from '@/shared/ui/icons/IconsNavigation/IconsNavigation';

export const NavButton: FC<INavButtonProps> = ({
  label,
  href,
  active,
  variant,
  open,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link href={href}>
      <StyledNavButton
        active={active}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconsNavigation
          color={active || isHovered ? '#222' : '#A0A6A6'}
          variant={variant}
        />
        {open && <StyledLabel active={active}>{label}</StyledLabel>}
      </StyledNavButton>
    </Link>
  );
};
