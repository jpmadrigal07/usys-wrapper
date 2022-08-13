import { createReactQueryHooks } from '@trpc/react'
import { inferProcedureOutput } from '@trpc/server'
import { AppRouter } from 'usys-api/src'

export const trpc = createReactQueryHooks<AppRouter>()

export type inferQueryOutput<
  TRouteKey extends keyof AppRouter['_def']['queries']
> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>
