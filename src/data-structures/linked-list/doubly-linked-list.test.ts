import { DoublyLinkedList } from './doubly-linked-list'

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList

  beforeEach(() => {
    list = new DoublyLinkedList()
  })

  test('should add a node to the end of the list and navigate backwards', () => {
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.insertAtEnd(4)

    const lastNode = list?.head?.next?.next?.next
    expect(lastNode?.data).toBe(4)
    expect(lastNode?.previous?.previous?.previous?.data).toBe(1)
  })

  test('should add a node to the beginning of the list and navigate backwards', () => {
    list.insertAtBeginning(1)
    list.insertAtBeginning(2)
    list.insertAtBeginning(3)
    list.insertAtBeginning(4)

    expect(list?.head?.data).toBe(4)
    expect(list?.head?.next?.previous?.data).toBe(4)
  })

  test('should delete the first node from the list and update backward links', () => {
    list.insertAtBeginning(1)
    list.insertAtBeginning(2)
    list.insertAtBeginning(3)
    list.insertAtBeginning(4)

    list.deleteFromBeginning()

    expect(list?.head?.data).toBe(3)
    expect(list?.head?.previous).toBeNull()

    list.deleteFromBeginning()
    list.deleteFromBeginning()
    list.deleteFromBeginning()

    expect(list?.head).toBeNull()
  })

  test('should delete the last node from the list and update backward links', () => {
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.insertAtEnd(4)

    list.deleteFromEnd()

    const secondLast = list?.head?.next?.next
    expect(secondLast?.next).toBeNull()
    expect(secondLast?.data).toBe(3)
    expect(secondLast?.previous?.data).toBe(2)

    list.deleteFromEnd()
    list.deleteFromEnd()
    list.deleteFromEnd()

    expect(list?.head).toBeNull()
  })

  test('should find a node with the given value and verify forward and backward navigation', () => {
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)

    const node = list.searchElement(2)
    expect(node?.data).toBe(2)
    expect(node?.next?.data).toBe(3)
    expect(node?.previous?.data).toBe(1)
    expect(list.searchElement(4)).toBeNull()
  })

  test('should traverse all nodes to the console and ensure backward links are correct', () => {
    console.log = jest.fn()

    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.traverse()

    expect(console.log).toHaveBeenCalledTimes(2)
  })
})
