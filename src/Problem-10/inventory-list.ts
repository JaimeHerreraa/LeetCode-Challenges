function inventoryList() {
  let inventory: string[] = [];

  function add(name: string) {
    if (!inventory.includes(name) && inventory.length < 10) {
      inventory.push(name);
    }
  }

  function remove(name: string) {
    if (inventory.includes(name)) {
      inventory = inventory.filter((n) => n !== name);
    }
  }

  function getList() {
    return inventory;
  }

  return { add, remove, getList };
}

const inventoryHandlers = inventoryList();
