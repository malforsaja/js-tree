class Tree {
  constructor(root) {
    this._root = root || null;
  }

  traverse(callback) {
    function goThrough(node) {
      callback(node);
      node.children.forEach((child) => {
        goThrough(child);
      });
    }
    goThrough(this._root);
  }


  addNode(value, parentValue) {
    const newNode = {
      value,
      children: []
    };

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    this.traverse((node) => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }

  removeNode(value) {
    this.traverse((node) => {
      node.children.forEach((childNode, index) => {
        if (childNode.value === value) {
          node.children.splice(index, 1);
        }
      });
    })
  }

  search(value) {
    let returnNode = 'Not Found';
    let allNodes = [];
    this.traverse((node) => {
      console.log(node);
      allNodes.push(node)
      if (node.value === value) {
        returnNode = node;
      }
    });
    return returnNode;
    //return allNodes[0];
  }
}

const tree = new Tree();

tree.addNode('Menu');
tree.addNode('Bacon & eggs', 'Menu');
tree.addNode('Hamburger', 'Menu');
tree.addNode('English breakfast', 'Menu');

// Bacon & eggs
tree.addNode('Bacon', 'Bacon & eggs');
tree.addNode('Ham Eggs', 'Bacon & eggs');
tree.addNode('Meat', 'Bacon');
tree.addNode('Egg', 'Ham Eggs');
tree.addNode('Pork', 'Meat');

// Hamburger
tree.addNode('Meat', 'Hamburger');
tree.addNode('Bread', 'Hamburger');
tree.addNode('Cheese', 'Hamburger');
tree.addNode('Pork', 'Meat');
tree.addNode('Flour', 'Bread');
tree.addNode('Water', 'Bread');
tree.addNode('Milk', 'Cheese');

// English breakfast
tree.addNode('Fried eggs', 'English breakfast');
tree.addNode('Mushrooms', 'English breakfast');
tree.addNode('Sausages', 'English breakfast');
tree.addNode('Bread', 'English breakfast');
tree.addNode('Egg', 'Fried eggs');
tree.addNode('Meat', 'Sausages');
tree.addNode('Flour', 'Bread');
tree.addNode('Water', 'Bread');
tree.addNode('Pork', 'Meat');


tree.traverse((node) => {
  //console.log(node);
  if (node.value === 'Egg') {
    //console.log(node);
  }
});

console.log('contains: ', tree.search('Meat'));