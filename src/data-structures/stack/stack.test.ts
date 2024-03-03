import { Stack } from './stack'

describe('Stack', () => {
  it('should create a stack with the given size', () => {
    const stack = new Stack(3)
    expect(stack).toBeDefined()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.isFull()).toBe(false)
  })

  it('should use the default size if no size is provided', () => {
    const stack = new Stack(null as any)
    for (let i = 0; i < 5; i++) {
      expect(stack.push(i)).toBe(true)
    }
    expect(stack.isFull()).toBe(true)
  })

  it('should push items to the stack', () => {
    const stack = new Stack(2)
    expect(stack.push(1)).toBe(true)
    expect(stack.push(2)).toBe(true)
    expect(stack.isFull()).toBe(true)
  })

  it('should pop items from the stack', () => {
    const stack = new Stack(2)
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.isEmpty()).toBe(true)
  })

  it('should not be able to push items to the stack after it is full', () => {
    const stack = new Stack(2)
    expect(stack.push(1)).toBe(true)
    expect(stack.push(2)).toBe(true)
    expect(stack.isFull()).toBe(true)
    expect(stack.push(3)).toBe(false)
  })

  it('should return null when popping from an empty stack', () => {
    const stack = new Stack(1)
    expect(stack.pop()).toBeNull()
  })

  it('should return true for isEmpty when the stack is empty', () => {
    const stack = new Stack(1)
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })

  it('should return true for isFull when the stack is full', () => {
    const stack = new Stack(1)
    stack.push(1)
    expect(stack.isFull()).toBe(true)
  })

  it('should peek the top item without removing it', () => {
    const stack = new Stack(2)
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.pop()).toBe(2)
    expect(stack.peek()).toBe(1)
  })

  it('should return null when peeking an empty stack', () => {
    const stack = new Stack(1)
    expect(stack.peek()).toBeNull()
  })
})
