class SortedList {
  constructor(arr) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if(!this.items[pos]) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList'); 
    return Math.max(...this.items);
  }
  
  min() {
    if (this.length === 0) throw new Error('EmptySortedList'); 
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((acc, num) => acc + num, 0);
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.sum(this.items)/this.length;
  }
}

module.exports = SortedList;
