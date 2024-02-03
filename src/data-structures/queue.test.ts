import { Queue } from './queue'

describe('Queue', () => {
  it('should define a default value if no value is passed', () => {
    const queue = new Queue(null as any)
    expect(queue.isEmpty()).toBe(true)
    expect(queue.isFull()).toBe(false)
  })

  it('enqueues items until it is full, and rejects further items', () => {
    const queue = new Queue(2)
    expect(queue.enqueue(1)).toBe(true)
    expect(queue.enqueue(2)).toBe(true)
    expect(queue.isFull()).toBe(true)
    expect(queue.enqueue(3)).toBe(false)
  })

  it('dequeues items in the order they were enqueued', () => {
    const queue = new Queue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.isEmpty()).toBe(true)
  })

  it('returns null when dequeuing from an empty queue', () => {
    const queue = new Queue(5)
    expect(queue.dequeue()).toBeNull()
  })

  it('properly resets its state after the last item is dequeued', () => {
    const queue = new Queue(2)
    queue.enqueue(1)
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
  })

  it('peeks at the next item without removing it', () => {
    const queue = new Queue(2)
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.peek()).toBe(1)
    expect(queue.dequeue()).toBe(1)
    expect(queue.peek()).toBe(2)
  })

  it('correctly identifies when it is empty or full', () => {
    const queue = new Queue(1)
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(1)
    expect(queue.isFull()).toBe(true)
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
    expect(queue.isFull()).toBe(false)
  })
})
