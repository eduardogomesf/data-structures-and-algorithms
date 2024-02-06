import { CircularQueue } from './circular-queue'

describe('CircularQueue', () => {
  let queue: CircularQueue

  beforeEach(() => {
    queue = new CircularQueue(5)
  })

  test('initially empty', () => {
    expect(queue.isEmpty()).toBe(true)
  })

  test('enqueue and dequeue operations', () => {
    queue.enqueue(1)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.peek()).toBe(1)
    expect(queue.dequeue()).toBe(1)
    expect(queue.isEmpty()).toBe(true)
  })

  test('wrapping around', () => {
    for (let i = 0; i < 5; i++) {
      queue.enqueue(i)
    }
    expect(queue.isFull()).toBe(true)
    expect(queue.enqueue(6)).toBe(false)
    expect(queue.dequeue()).toBe(0)
    expect(queue.enqueue(5)).toBe(true)
    expect(queue.isFull()).toBe(true)
  })

  test('peek operation', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.peek()).toBe(1)
    queue.dequeue()
    expect(queue.peek()).toBe(2)
  })

  test('isFull operation', () => {
    for (let i = 0; i < 4; i++) {
      queue.enqueue(i)
    }
    expect(queue.isFull()).toBe(false)
    queue.enqueue(4)
    expect(queue.isFull()).toBe(true)
  })

  test('empty after dequeuing all elements', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.dequeue()
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
  })
})
