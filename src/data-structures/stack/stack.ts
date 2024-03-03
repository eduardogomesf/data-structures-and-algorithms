export class Stack {
  private readonly size: number
  private top = -1
  private readonly data: any[]

  constructor(size: number) {
    this.size = size ?? 5
    this.data = []
  }

  push(value: any) {
    if (this.isFull()) {
      return false
    }

    this.top++

    this.data[this.top] = value

    return true
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }

    const value = this.data[this.top]

    this.top--

    return value
  }

  isEmpty() {
    return this.top === -1
  }

  isFull() {
    return this.top === (this.size - 1)
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.data[this.top]
  }
}
