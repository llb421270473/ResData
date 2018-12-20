/* @flow */

// import {namespaceMap} from 'web/util/index'

const emptyObj = {}

export function createElement (tagName: string, vnode: VNode): Element {
  return emptyObj
}

export function createElementNS (namespace: string, tagName: string): Element {
  return emptyObj
}

export function createTextNode (text: string): Text {
  return emptyObj
}

export function createComment (text: string): Comment {
  return emptyObj
}

export function insertBefore (parentNode: Node, newNode: Node, referenceNode: Node) {
}

export function removeChild (node: Node, child: Node) {
}

export function appendChild (node: Node, child: Node) {
}

export function parentNode (node: Node): ?Node {
  return emptyObj
}

export function nextSibling (node: Node): ?Node {
  return emptyObj
}

export function tagName (node: Element): string {
  return 'div'
}

export function setTextContent (node: Node, text: string) {
  return emptyObj
}

export function setStyleScope (node: Element, scopeId: string) {
  return emptyObj
}
