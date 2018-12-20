/* @flow */

import Vue from 'core/index'
import {mountComponent} from 'core/instance/lifecycle'

import {
  mustUseProp,
  isReservedTag,
  isReservedAttr,
  getTagNamespace,
  isUnknownElement
} from 'web/util/index'

import {patch} from './patch'

// install platform specific utils
Vue.config.mustUseProp = mustUseProp
Vue.config.isReservedTag = isReservedTag
Vue.config.isReservedAttr = isReservedAttr
Vue.config.getTagNamespace = getTagNamespace
Vue.config.isUnknownElement = isUnknownElement

// install platform patch function
Vue.prototype.__patch__ = patch

// public mount method
Vue.prototype.$mount = function (): Component {
  return mountComponent(this, undefined, undefined)
}

export default Vue
