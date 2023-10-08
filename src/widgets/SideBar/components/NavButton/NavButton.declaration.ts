import { TIconVariant } from "@/shared/ui/icons/IconsNavigation/IconsNavigation.declaration";


export interface INavButtonProps {
    label: string,
    href: string,
    active: boolean,
    variant: TIconVariant,
    open: boolean,
}

export interface INavButtonStyle {
    active: boolean
}