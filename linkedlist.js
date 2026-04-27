class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    , this.nextNode = nextNode
  }
}

export class LinkedList {
  constructor () {
    this.listhead = null
  }

  append (value) {
    if (this.listhead === null) {
      this.prepend(value)
    } else {
      let tmp = this.listhead
      while (tmp.nextNode !== null) tmp = tmp.nextNode
      tmp.nextNode = new Node(value)
    }
  }

  prepend (value) {
    const node = new Node(value, this.listhead)
    this.listhead = node
  }

  size () {
    let counter = 0
    let tmp = this.listhead
    while (tmp !== null && tmp.nextNode !== null) {
      counter++
      tmp = tmp.nextNode
    }
    return ++counter
  }

  head () {
    if (this.listhead === null) return
    return this.listhead.value
  }

  tail () {
    if (this.listhead === null) return
    let tmp = this.listhead
    while (tmp.nextNode !== null) tmp = tmp.nextNode
    return tmp.value
  }

  at (index) {
    if (this.listhead === null) return
    let counter = 0
    let tmp = this.listhead
    while (counter < index && tmp.nextNode !== null) {
      tmp = tmp.nextNode
      counter++
    }
    return counter < index ? undefined : tmp.value
  }

  pop () {
    if (this.listhead === null) return
    const popped = this.listhead.value
    const newHead = this.listhead.nextNode
    this.listhead = newHead
    return popped
  }

  contains (value) {
    let extant = false
    if (this.listhead !== null) {
      let tmp = this.listhead
      while (tmp.nextNode !== null) {
        if (tmp.value === value) break
        tmp = tmp.nextNode
      }
      extant = tmp.value === value
    }
    return extant
  }

  findIndex (value) {
    if (this.listhead === null) return -1
    let tmp = this.listhead
    let counter = 0
    while (tmp.value !== value && tmp.nextNode !== null) {
      tmp = tmp.nextNode
      counter++
    }
    return tmp.value === value ? counter : -1
  }

  toString () {
    let string = ''
    let tmp = this.listhead
    while (tmp !== null) {
      string += `(${tmp.value}) --> `
      if (tmp.nextNode === null) string += `null`
      tmp = tmp.nextNode
    }
    return string
  }
}