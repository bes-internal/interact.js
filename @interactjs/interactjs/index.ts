import '@interactjs/types'

import interact from '@interactjs/interact'
import interactablePreventDefault from '@interactjs/core/interactablePreventDefault'
import inertia from '@interactjs/inertia'
import pointerEvents from '@interactjs/pointer-events'
import autoStart from '@interactjs/auto-start'
import actions from '@interactjs/actions'
import modifiers from '@interactjs/modifiers/index'
import autoScroll from '@interactjs/auto-scroll'
import reflow from '@interactjs/reflow'
import devTools from '@interactjs/dev-tools'

import multiTarget from '@interactjs/multi-target'
import offset from '@interactjs/offset'
import arrange from '@interactjs/arrange'

import * as feedback from '@interactjs/feedback'
import clone from '@interactjs/clone'

import * as vueComponents from '@interactjs/vue'
import components from '@interactjs/components'

import * as pointerUtils from '@interactjs/utils/pointerUtils'
import * as displace from '@interactjs/utils/displace'
import { exchange } from '@interactjs/utils/exchange'

declare module '@interactjs/core/InteractStatic' {
  interface InteractStatic {
    __utils: {
      exchange: typeof exchange
      displace: typeof displace
      pointer: typeof pointerUtils
    }
    feedback: typeof feedback
    vue: {
      components: typeof vueComponents
    }
  }
}

interact.use(multiTarget)

interact.use(interactablePreventDefault)

interact.use(offset)

// interaction element cloning
interact.use(clone)

// sortable and swappable
interact.use(arrange)

// pointerEvents
interact.use(pointerEvents)

// inertia
interact.use(inertia)

// snap, resize, etc.
interact.use(modifiers)

// autoStart, hold
interact.use(autoStart)

// drag and drop, resize, gesture
interact.use(actions)

// autoScroll
interact.use(autoScroll)

// reflow
interact.use(reflow)

interact.feedback = feedback

interact.use(components)

interact.vue = {
  components: vueComponents,
}

interact.__utils = {
  exchange,
  displace,
  pointer: pointerUtils,
}

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
  interact.use(devTools)
}

export default interact
