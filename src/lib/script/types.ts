import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLAnchorAttributes, HTMLButtonAttributes, HTMLImgAttributes, SVGAttributes, HTMLVideoAttributes } from 'svelte/elements';

// Pages
export interface Page {
    title: string;
    desc: string;
    href: string;
    id: string;
    inNav: boolean;
}

// Work Roles
export interface Role {
    title: string;
    desc: string;
    company: string;
    period: string;
    location: string;
}

// Case studies
export interface Case extends Page {
    icon: string;
    accent: string;
    inList: boolean;
}

// Colour Swatch
export interface RawSwatch {
    hex: string;
    rgb: number[];
}

export interface ThemeSwatch {
    base: { hex: string, rgb: string };
    dark: { hex: string, rgb: string };
    light: { hex: string, rgb: string};
    raw: string;
}

// CSS
export interface Fallback {
    fallback: string;
    value: string;
}

// Collections
export type Roles = Record<string, Role>;
export type RawSwatches = Record<string, RawSwatch>;
export type ThemeSwatches = Record<string, ThemeSwatch>;

// Components
export interface BlockProps {
    children: Snippet;
    props?: HTMLAttributes<HTMLElement> & { 
        content?: HTMLAttributes<HTMLElement> 
    };
    beforeContent?: Snippet;
    afterContent?: Snippet;
}

export interface PageHeaderProps {
    props?: HTMLAttributes<HTMLElement> & { 
        tags?: string[];
        content?:HTMLAttributes<HTMLElement>; 
    };
    children: Snippet;
}

export interface LinkProps {
    props: HTMLAnchorAttributes & { label: HTMLAttributes<HTMLElement> };
}

export interface ButtonProps {
    props: HTMLButtonAttributes & { label: HTMLAttributes<HTMLElement> };
}

export interface EmojiProps {
    emoji: string;
    text?: string;
    addOnClasses?: string;
}

export interface ImageProps {
    src: string;
    alt: string;
    desc?: string;
    props?: HTMLImgAttributes | SVGAttributes<SVGElement> | HTMLAttributes<HTMLElement> ;
    parent?: HTMLAttributes<HTMLElement>;
}

export interface VideoProps {
    vid: string;
    props?: HTMLVideoAttributes;
}

export interface RoleProps {
    id: string;
    children: Snippet;
}