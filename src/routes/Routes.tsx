import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Loading } from 'src/components/Loading/Loading'
import ListProvider from 'src/context/context'
import { Home, GenericNotFound, HeroDetail } from './paths'

export const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ListProvider>
        <RoutesReactRouterDom>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<HeroDetail />} />

          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<GenericNotFound />} />
        </RoutesReactRouterDom>
      </ListProvider>
    </Suspense>
  )
}
