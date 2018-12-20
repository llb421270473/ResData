/* @flow */

import * as nodeOps from 'wechat/runtime/node-ops'
import {createPatchFunction} from 'core/vdom/patch'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = []

export const nativePatch: Function = createPatchFunction({nodeOps, modules})
export const patch: Function = function () {
  nativePatch.apply(this, arguments)
  if (this.$WeChatPatch) this.$WeChatPatch(this)
}
