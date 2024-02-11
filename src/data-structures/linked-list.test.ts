import { LinkedList } from './linked-list'

describe('LinkedList', () => {
  let list: LinkedList

  beforeEach(() => {
    list = new LinkedList()
  })

  test('should add a node to the end of the list', () => {
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.insertAtEnd(4)

    expect(list?.head?.next?.next?.next?.data).toBe(4)
  })

  test('should add a node to the beginning of the list', () => {
    list.insertAtBeginning(1)
    list.insertAtBeginning(2)
    list.insertAtBeginning(3)
    list.insertAtBeginning(4)

    expect(list?.head?.data).toBe(4)
  })

  test('should delete the first node from the list', () => {
    list.insertAtBeginning(1)
    list.insertAtBeginning(2)
    list.insertAtBeginning(3)
    list.insertAtBeginning(4)

    list.deleteFromBeginning()

    expect(list?.head?.data).toBe(3)

    list.deleteFromBeginning()
    list.deleteFromBeginning()
    list.deleteFromBeginning()

    expect(list?.head).toBeNull()
  })

  test('should delete the last node from the list', () => {
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)
    list.insertAtEnd(4)

    expect(list?.head?.next?.next?.next?.data).toBe(4)

    list.deleteFromEnd()

    expect(list?.head?.next?.next?.next).toBeNull()
    expect(list?.head?.next?.next?.data).toBe(3)

    list.deleteFromEnd()
    list.deleteFromEnd()
    list.deleteFromEnd()

    expect(list?.head).toBeNull()
  })

  test('should find a node with the given value', () => {
    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.insertAtEnd(3)

    const node = list.searchElement(2)
    expect(node?.data).toBe(2)
    expect(list.searchElement(4)).toBeNull()
  })

  test('should traverse all nodes to the console', () => {
    console.log = jest.fn()

    list.insertAtEnd(1)
    list.insertAtEnd(2)
    list.traverse()

    expect(console.log).toHaveBeenCalledTimes(2)
  })
})
