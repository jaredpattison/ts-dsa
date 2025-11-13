# ts-dsa

A TypeScript implementation of Code Fellows 401 Advanced Javascript (https://github.com/codefellows) - Daily Warm-Up Exercises practice repository for data structures, algorithms, and coding challenges. This project contains implementations of common data structures, solutions to LeetCode problems, coding challenges, and daily warmup exercises.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Jest** - Testing framework
- **Superagent** - HTTP client for async exercises
- **Express.js** - Web server framework (in warmups)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm

### Installation

```bash
yarn install
# or
npm install
```

### Running Tests

```bash
yarn test
# or
npm test
```

To run specific test files:

```bash
yarn test leet/1.test.ts
yarn test challenges/challenge-01.test.ts
```

## Project Structure

```
ts-dsa/
├── lib/                    # Core data structure implementations
│   ├── binary-tree.ts      # Binary tree and TreeNode classes
│   └── singly-linked-list.ts  # Singly linked list implementation
│
├── leet/                   # LeetCode problem solutions
│   ├── 1.test.ts          # Two Sum
│   ├── 2.test.ts          # Add Two Numbers
│   ├── 3.test.ts          # Longest Substring Without Repeating Characters
│   ├── 6.test.ts          # ZigZag Conversion
│   ├── 16.test.ts         # 3Sum Closest
│   └── 34.test.ts         # Find First and Last Position of Element
│
├── challenges/             # Coding challenges with tests
│   ├── _challenge-01.txt  # Challenge instructions
│   └── challenge-01.test.ts # Challenge tests (callbacks, forEach, etc.)
│
├── warmups/                # Daily practice exercises
│   ├── daily/             # Day-by-day warmups (18 days)
│   ├── async/             # Async/await and promise practice (8 exercises)
│   ├── DSA/               # Data structure and algorithm practice
│   │   ├── binary-tree-practice.ts
│   │   ├── linked-list-practice.ts
│   │   └── sort-practice.ts
│   └── express/           # Express.js server practice
│
└── katas/                  # Code katas (for future use)
```

## Available Data Structures

### BinaryTree<T>

A generic binary tree implementation with `TreeNode` nodes.

```typescript
import { TreeNode, BinaryTree } from './lib/binary-tree';

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

const tree = new BinaryTree(root);
```

### SinglyLinkedList<T>

A singly linked list with helper methods for building from arrays, converting to arrays, and printing.

```typescript
import { SinglyLinkedList } from './lib/singly-linked-list';

// Create from array
const list = new SinglyLinkedList([10, 20, 30, 40, 50]);
list.printList(); // Output: 10 -> 20 -> 30 -> 40 -> 50

// Append values
list.append(60);

// Convert to array
const arr = list.convertToArray(list.head);
```

## Practice Areas

### LeetCode Problems

Solutions to various LeetCode problems with multiple approaches and complexity analysis:
- **Two Sum** - Hash map optimization
- **Add Two Numbers** - Linked list manipulation
- **Longest Substring** - Sliding window technique
- **ZigZag Conversion** - String manipulation
- **3Sum Closest** - Two pointer technique
- **Find First and Last Position** - Binary search

### Coding Challenges

Practice problems covering:
- Callback functions
- Array manipulation (map, filter, reduce)
- forEach patterns
- Anonymous functions
- FizzBuzz variations

### Daily Warmups

Daily exercises covering:
- Array methods (map, filter, reduce)
- Loops (for, while)
- Object/array spread operators
- State management patterns

### Async/Await Practice

Exercises focusing on:
- Promise handling
- Async/await syntax
- HTTP requests with Superagent
- Parallel request handling

### Express.js Practice

Server development exercises covering:
- Basic routing
- Middleware
- Error handling
- View rendering

## License

MIT
