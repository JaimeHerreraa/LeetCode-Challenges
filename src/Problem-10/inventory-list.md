# 10. Inventory List - Closures (Easy)

Implement a function, **inventoryList**, such that:

1. it maintains the collection of all item names existing in an inventory, where each item is uniquely
   identified by a name.
2. returns a new object, with three methods:
   - **add(name)** - The string name parameter is passed, and it is added to the collection. Items in the
     collection are distinct.
   - **remove(name)** - The string name parameter is passed, and this item is removed from the
     collection if it exists. If it does not exist, nothing happens.
   - **getList()** - This returns an array of names of items added so far. The names are returned in the
     order the corresponding items were added.

Your function implementation will be tested by a stubbed code on several input files. Each input file
contains parameters for the function calls. The results of their execution will be printed to standard output
by the provided code. The stubbed code joins the strings returned by the getList function by a comma and
prints to the standard output. If getList returns an empty array, the stubbed code prints 'No Items'.

### Constraints:

- The size of the collection will not exceed 10 at any point.
- All names passed to add(name) and remove(name) are non-empty

### Example 1:

### Input

```
add Shirt
remove Trouser
getList
```

### Output

```
Shirt
```

### Explanation:

Item 'Shirt' is added by the add function. Then, remove is called with 'Trouser'. Since 'Trouser' does not
exist, nothing happens. Finally, getList is called, and the result is printed.
