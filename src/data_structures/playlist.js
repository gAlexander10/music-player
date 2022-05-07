class Playlist {
  constructor(array, index) {
    this.array = array;
    this.index = index;
  }

  add(new_element) {
    this.array.push(new_element);
  }

  current() {
    return this.array[this.index]
  }

  prev() {
    if (this.index <= 0 ) { 
      this.index = this.array.length -1
      return
    }
    this.index -= 1
  }

  next() {
    if ( this.index >= this.array.length -1) {
      this.index = 0;
      return
    }
    this.index += 1
  }

}

export default Playlist;
