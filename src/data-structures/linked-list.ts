export class Node {
  data: any
  next: Node | null

  constructor(value: any, next?: Node) {
    this.data = value
    this.next = next ?? null
  }
}

export class LinkedList {
  head: Node | null

  insertAtEnd(value: any) {
    const node = new Node(value)

    if(!this.head) {
      this.head = node
    } else {
      let tmp = this.head
      while(tmp.next != null) {
        tmp = tmp.next
      }
      tmp.next = node
    }
  }

  insertAtBeginning(value: any) {
    const node = new Node(value)

    const oldHead = this.head ?? null
    this.head = node
    this.head.next = oldHead
  }

  traverse() {
    let node = this.head

    while(node) {
      console.log(node)
      node = node.next
    }
  }

  deleteFromBeginning() {
    let oldHead = this.head

    this.head = null

    if(oldHead && oldHead.next) {
      this.head = oldHead.next
    }
  }

  deleteFromEnd() {
    let node = this.head

    if(!node || node.next === null) {
      this.head = null
      return
    }

    while(node) {
      if(node.next && node.next.next === null) {
        node.next = null
        break;
      }
      node = node.next
    }
  }

  searchElement(value: any) {
    let node = this.head

    while(node) {
      if(node.data === value) {
        break;
      }
      node = node.next
    }

    return node
  }

}
