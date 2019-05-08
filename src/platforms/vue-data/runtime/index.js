import {initMixin} from 'core/instance/rd-init'
import {stateMixin} from 'core/instance/state'
import {eventsMixin} from 'core/instance/events'
import {lifecycleMixin} from 'core/instance/lifecycle'
import {initGlobalAPI} from 'core/global-api/index'
import {warn} from 'core/util/index'
import Watcher from 'core/observer/watcher'

function Vue (options, onStateChange) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
  new Watcher(this, () => {
    if (onStateChange) onStateChange(this)
  }, {}, {}, true)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
initGlobalAPI(Vue)

Vue.version = '__VERSION__'

export default Vue
