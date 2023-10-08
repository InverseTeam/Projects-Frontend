export const PROJECTS_VARIANT = 'projects';
export const SPECIALIST_VARIANT = 'specialist';

export const ICON_VARIANTS = [PROJECTS_VARIANT, SPECIALIST_VARIANT] as const;


export type TIconVariant = (typeof ICON_VARIANTS)[number];

export interface ISpecialistIconProps {
    color: string,
    variant: TIconVariant,
}