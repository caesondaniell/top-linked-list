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
    return tmp === null ? counter : ++counter
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

  insertAt (index, ...vals) {
    if (index < 0 || index > this.size()) {
      throw new RangeError('Out of bounds!')
    }

    const values = [...vals]
    if (this.listhead === null || index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i])
      }
    } else if (index === this.size()) {
      values.forEach((value) => this.append(value))
    } else {
      let startNode = this.listhead
      for (let i = 0; i < index - 1; i++) {
        startNode = startNode.nextNode
      }
      const endNode = startNode.nextNode
      values.forEach((value) => {
        startNode.nextNode = new Node(value)
        startNode = startNode.nextNode
      })
      startNode.nextNode = endNode
    }
  }

  removeAt (index) {
    if (index < 0 || index > this.size() - 1) {
      throw new RangeError('Out of bounds!')
    }
    if (index === 0) {
      this.listhead = this.listhead.nextNode
    } else {
      let tmp = this.listhead
      for (let i = 0; i < index - 1; i++) {
        tmp = tmp.nextNode
      }
      tmp.nextNode = tmp.nextNode.nextNode
    }
  }
}