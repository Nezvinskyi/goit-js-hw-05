class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items
  };
  addItem(item) {
    this.items.push(item)
  };
  removeItem(item) {
    if (!this.items.includes(item)) {
      console.log('There is no such an item in the inventory');
    }
    for (let i = 0; i < this.items.length; i += 1){
      if (this.items[i] === item) {
        this.items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

console.log(storage);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items); 

storage.removeItem('Доид');
storage.removeItem('Дроид');
console.table(storage.items); 

