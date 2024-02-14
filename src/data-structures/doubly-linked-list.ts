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

  insertAtEnd(value: any) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
    } else {
      let tmp = this.head
      while (tmp.next != null) {
        tmp = tmp.next
      }
      tmp.next = node
      node.previous = tmp
    }
  }

  insertAtBeginning(value: any) {
    const node = new Node(value)

    const oldHead = this.head ?? null
    this.head = node
    this.head.next = oldHead

    if (oldHead) {
      oldHead.previous = node
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
    }
  }

  deleteFromEnd() {
    let node = this.head

    if (node?.next === null) {
      this.head = null
      return
    }

    while (node) {
      if (node.next && node.next.next === null) {
        node.next = null
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
