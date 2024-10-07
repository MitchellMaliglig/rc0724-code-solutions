export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    // Not implemented
    if (this.nodes.length === 0) {
      this.nodes.push({ data: item, priority });
    } else {
      let inserted = false;
      for (let i = 0; i < this.nodes.length && !inserted; i++) {
        if (priority >= this.nodes[i].priority) {
          this.nodes.splice(i, 0, { data: item, priority });
          inserted = true;
        }
      }
      if (!inserted) {
        this.nodes.push({ data: item, priority });
      }
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    } else {
      return this.nodes.shift()?.data;
    }
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    } else {
      return this.nodes[0].data;
    }
  }
}
