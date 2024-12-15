class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  //Insert new word into the Trie
  insert(word: string): void {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char)!;
    }
    currentNode.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word: string): boolean {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return currentNode.isEndOfWord;
  }

  //Check if the word starts with a given prefix
  startsWith(prefix: string): boolean {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return true;
  }
}
