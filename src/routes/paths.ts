import { lazy } from 'react'

export const Home = lazy(() =>
  import('src/pages/Home/Home').then(module => ({
    default: module.Home,
  })),
)

export const HeroDetail = lazy(() =>
  import('src/pages/HeroDetail/HeroDetail').then(module => ({
    default: module.HeroDetail,
  })),
)
export const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)
