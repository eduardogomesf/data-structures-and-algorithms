export class CircularQueue {
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

    if (this.rear + 1 === this.size) {
      this.rear = 0
    } else {
      this.rear++
    }

    this.data[this.rear] = value

    return true
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    const value = this.data[this.front]

    if (this.front === this.rear) {
      this.front = -1
      this.rear = -1
      this.data = []
    } else if (this.front + 1 === this.size && this.rear < this.front) {
      this.front = 0
    } else {
      this.front++
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
    return (this.front === 0 && this.rear === (this.size - 1)) || (this.front === this.rear + 1)
  }

  isEmpty() {
    return this.front === -1 && this.rear === -1
  }
}
