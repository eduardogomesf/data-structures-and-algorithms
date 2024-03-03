export class Node {
  data: any
  previous: Node | null
  next: Node | null

  constructor(value: any, next?: Node, previous?: Node) {
    this.data = value
    this.next = next ?? null
    this.previous = previous ?? null
  }
}

export class DoublyLinkedList {
  head: Node | null
  last: Node | null

  insertAtEnd(value: any) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
      this.last = node
    } else {
      let tmp = this.head
      while (tmp.next != null) {
        tmp = tmp.next
      }
      tmp.next = node
      node.previous = tmp
      this.last = node
      this.last.next = this.head
    }
  }

  insertAtBeginning(value: any) {
    const node = new Node(value)

    const oldHead = this.head ?? null
    this.head = node
    this.head.next = oldHead

    if (oldHead) {
      oldHead.previous = node

      if (this.last) {
        this.last.next = node
      }
    } else {
      this.last = node
    }
  }

  traverse() {
    let node = this.head

    while (node) {
      console.log(node)
      node = node.next
    }
  }

  deleteFromBeginning() {
    const oldHead = this.head

    this.head = null

    if (oldHead?.next) {
      this.head = oldHead.next
      this.head.previous = null

      if (this.last) {
        this.last.next = this.head.next ? this.head : null
      }
    } else {
      this.last = null
    }
  }

  deleteFromEnd() {
    let node = this.head

    if (node?.next === null) {
      this.head = null
      this.last = null
      return
    }

    while (node) {
      if (node.next && node.next.next === null) {
        node.next = null
        this.last = node
        break
      }
      node = node.next
    }
  }

  searchElement(value: any) {
    let node = this.head

    while (node) {
      if (node.data === value) {
        break
      }
      node = node.next
    }

    return node
  }
}
