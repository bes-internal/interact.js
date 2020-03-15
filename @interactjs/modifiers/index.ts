import base from './base'

import all from './all'
import snappers from '@interactjs/snappers/index'

declare module '@interactjs/core/InteractStatic' {
  interface InteractStatic {
    modifiers: typeof all
  }
}

const modifiers: Interact.Plugin = {
  id: 'modifiers',
  install (scope) {
    const { interactStatic: interact } = scope

    scope.usePlugin(base)
    scope.usePlugin(snappers)

    interact.modifiers = all

    // for backwrads compatibility
    for (const type in all) {
      const { _defaults, _methods } = all[type as keyof typeof all]

      ;(_defaults as any)._methods = _methods
      ;(scope.defaults.perAction as any)[type] = _defaults
    }
  },
}

export default modifiers
