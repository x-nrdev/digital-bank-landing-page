export interface MetaTags {
  title: string
}

export interface Logo {
  theme: 'light' | 'dark'
}

export interface NavLinks {
  links: Link[]
}

export interface Link {
  href: string
  innerText: string
}

export interface AnchorButtonType {
  href: string
  innerText: string
  variant: 'primary' | 'secondary'
}