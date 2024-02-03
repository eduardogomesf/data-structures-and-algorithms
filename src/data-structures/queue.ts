export class Queue {
  private readonly size: number
  private data: any[]
  private front: number
  private rear: number

  constructor(size: number) {
    this.size = size ?? 5
    this.data = []
    this.front = -1
    this.rear = -1
  }

  enqueue(value: any) {
    if (this.isFull()) {
      return false
    }

    if (this.isEmpty()) {
      this.front = 0
    }

    this.rear++

    this.data[this.rear] = value

    return true
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    const value = this.data[this.front]

    this.front++

    if (this.front > this.rear) {
      this.front = -1
      this.rear = -1
      this.data = []
    }

    return value
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.data[this.front]
  }

  isFull() {
    return this.rear === (this.size - 1)
  }

  isEmpty() {
    return this.front === -1 && this.rear === -1
  }
}
