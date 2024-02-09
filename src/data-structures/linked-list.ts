export class Node {
  data: any
  next: Node | null

  constructor(value: any, next?: Node) {
    this.data = value
    this.next = next ?? null
  }
}

export class LinkedList {
  head: Node

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

    if(!this.head) {
      this.head = node
    } else {
      const oldHead = this.head
      this.head = node
      this.head.next = oldHead
    }
  }

  traverse() {
    let node = this.head

    while(node && node.next != null) {
      console.log(node)
      node = node.next
    }
  }


}
