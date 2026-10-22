<div align="center">

# 🧩 STN-7 — Problem Solving

### *20 JavaScript interview problems, solved with ES6+*

[![Problems](https://img.shields.io/badge/problems-20-blue?style=for-the-badge)]()
[![Language](https://img.shields.io/badge/language-JavaScript%20ES6--yellow?style=for-the-badge)]()
[![Status](https://img.shields.io/badge/status-100%25%20solved-brightgreen?style=for-the-badge)]()
[![File](https://img.shields.io/badge/solutions-Solution.js-informational?style=for-the-badge)]()

</div>

---

## 📖 Table of Contents

| # | Problem | Function | Difficulty | Core Topic |
|---|---------|----------|:----------:|------------|
| 1 | [Staircase](#problem-1-staircase) | `staircase(n)` | 🟢 Easy | Strings, Loops |
| 2 | [Grading Students](#problem-2-grading-students) | `gradingStudents(grades)` | 🟢 Easy | Conditionals, Math |
| 3 | [Time Conversion](#problem-3-time-conversion) | `timeConversion(s)` | 🟢 Easy | String Parsing |
| 4 | [String Repeat](#problem-4-string-repeat) | `repeatStr(n, s)` | 🟢 Easy | Strings, Loops |
| 5 | [Reversed Strings](#problem-5-reversed-strings) | `solution(str)` | 🟢 Easy | Strings |
| 6 | [Sum of Positive](#problem-6-sum-of-positive) | `positiveSum(arr)` | 🟢 Easy | Arrays, Reduce |
| 7 | [Grasshopper — Summation](#problem-7-grasshopper--summation) | `summation(num)` | 🟢 Easy | Math Formula |
| 8 | [Boolean to String](#problem-8-convert-a-boolean-to-a-string) | `booleanToString(b)` | 🟢 Easy | Type Conversion |
| 9 | [Fizz Buzz](#problem-9-fizz-buzz) | `fizzBuzz(n)` | 🟢 Easy | Loops, Modulo |
| 10 | [Running Sum of 1D Array](#problem-10-running-sum-of-1d-array) | `runningSum(nums)` | 🟢 Easy | Arrays, Prefix Sum |
| 11 | [Richest Customer Wealth](#problem-11-richest-customer-wealth) | `maximumWealth(accounts)` | 🟢 Easy | 2D Arrays, Reduce |
| 12 | [Remove Duplicates from Sorted Array](#problem-12-remove-duplicates-from-sorted-array) | `removeDuplicates(nums)` | 🟡 Easy-Med | Two Pointers, In-Place |
| 13 | [Contains Duplicate](#problem-13-contains-duplicate) | `containsDuplicate(nums)` | 🟢 Easy | Set |
| 14 | [Move Zeroes](#problem-14-move-zeroes) | `moveZeroes(nums)` | 🟡 Easy-Med | Two Pointers, In-Place |
| 15 | [Merge Sorted Array](#problem-15-merge-sorted-array) | `merge(nums1, m, nums2, n)` | 🟡 Medium | Two Pointers, In-Place |
| 16 | [3Sum](#problem-16-3sum) | `threeSum(nums)` | 🟡 Medium | Sorting, Two Pointers |
| 17 | [Plus One](#problem-17-plus-one) | `plusOne(digits)` | 🟡 Easy-Med | Carry Propagation |
| 18 | [Reverse String](#problem-18-reverse-string) | `reverseString(s)` | 🟢 Easy | Two Pointers, In-Place |
| 19 | [Length of Last Word](#problem-19-length-of-last-word) | `lengthOfLastWord(s)` | 🟢 Easy | Strings, Scanning |
| 20 | [Longest Common Prefix](#problem-20-longest-common-prefix) | `longestCommonPrefix(strs)` | 🟢 Easy | Nested Loops |

---

## 🧭 Overview

### 🎯 Goal
Solve all **20 assigned problems** in JavaScript using modern **ES6+** syntax — one single file, exact function names, no hardcoded outputs.

### 📜 General Instructions
- ✅ Implement all solutions in **one single file** → [`Solution.js`](./Solution.js)
- ✅ Use the **exact function names and parameter structures** provided in each problem
- ✅ **No hardcoded outputs** — every solution must work with different valid inputs
- ✅ Consider **edge cases**, input constraints and time/space complexity
- ✅ For **in-place** problems, modify the input array and return `void` when the signature says so
- ✅ Test against the provided examples **plus** additional test cases
- ✅ Organize the code with **clear comment banners** per problem

### 🧰 ES6+ Toolkit Used

| Feature | Where it is used |
|---------|------------------|
| `const` / `let` | Every solution (block-scoped, no accidental leaks) |
| Arrow functions | `map` / `reduce` / `forEach` callbacks (Problems 6, 10, 11, 16) |
| Template literals | Time formatting (Problem 3) |
| Spread / destructuring | Reverse (Problem 5), swap (Problem 18), copy-sort (Problem 16) |
| `Set` | Duplicate detection in one pass (Problem 13) |
| `String.prototype.repeat` | Staircase & string repeat (Problems 1, 4) |
| `String.prototype.padStart` | Zero-padded 24-hour format (Problem 3) |
| `Array.prototype.reduce` | Sums & aggregation (Problems 6, 11) |
| `Array.isArray` / `typeof` guards | Defensive input validation in every solution |

### 📊 Progress

```
Problem  1 ████████████████████ 100%
Problem  2 ████████████████████ 100%
Problem  3 ████████████████████ 100%
Problem  4 ████████████████████ 100%
Problem  5 ████████████████████ 100%
Problem  6 ████████████████████ 100%
Problem  7 ████████████████████ 100%
Problem  8 ████████████████████ 100%
Problem  9 ████████████████████ 100%
Problem 10 ████████████████████ 100%
Problem 11 ████████████████████ 100%
Problem 12 ████████████████████ 100%
Problem 13 ████████████████████ 100%
Problem 14 ████████████████████ 100%
Problem 15 ████████████████████ 100%
Problem 16 ████████████████████ 100%
Problem 17 ████████████████████ 100%
Problem 18 ████████████████████ 100%
Problem 19 ████████████████████ 100%
Problem 20 ████████████████████ 100%
─────────────────────────────────
Total     20 / 20 solved  ✅
```

---
---

## Problem 1: Staircase

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Strings, Loops |
| **Function** | `staircase(n)` |
| **Time / Space** | `O(n²)` / `O(n²)` (output size) |

### 📝 Problem Description
You are given an integer `n`, representing the height of a staircase. Your task is to construct a **right-aligned staircase** using the `#` character and spaces.

- The staircase must contain exactly `n` rows.
- Each row should contain the appropriate number of **leading spaces** followed by `#` characters.
- The first row contains one `#`, and each subsequent row contains one additional `#` until the final row contains `n` characters.
- Each row must be separated by a newline character (`\n`).
- Do **not** include unnecessary spaces at the end of any row.

### 🔧 Function Signature
```js
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
};
```

### 🧪 Examples
```text
Example 1
Input:  n = 4
Output:
  #
  ##
 ###
####

Example 2
Input:  n = 1
Output:
#
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var staircase = function (n) {
  if (typeof n !== "number" || n <= 0) {
    return "";
  }

  const rows = [];

  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }

  return rows.join("\n");
};
```

</details>

---

## Problem 2: Grading Students

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Conditionals, Math |
| **Function** | `gradingStudents(grades)` |
| **Time / Space** | `O(n)` / `O(n)` |

### 📝 Problem Description
A teacher has assigned grades to a group of students. The grading system allows grades to be rounded according to the following rules:

1. If a grade is **less than 38**, it remains unchanged because it is below the minimum passing grade.
2. If the difference between the grade and the **next multiple of 5** is **less than 3**, round the grade up to that next multiple of 5.
3. Otherwise, keep the original grade unchanged.

Given an array of student grades, return a **new array** containing the final grades after applying these rules independently to each student.

### 🔧 Function Signature
```js
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
};
```

### 🧪 Examples
```text
Example 1
Input:  grades = [73, 67, 38, 33]
Output: [75, 67, 40, 33]
Explanation:
• 73 is rounded to 75 because the difference is 2.
• 67 remains unchanged because the difference to 70 is 3.
• 38 is rounded to 40 because the difference is 2.
• 33 remains unchanged because it is below 38.

Example 2
Input:  grades = [84, 29, 57]
Output: [85, 29, 57]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var gradingStudents = function (grades) {
  if (!Array.isArray(grades)) {
    return [];
  }

  return grades.map((grade) => {
    if (typeof grade !== "number" || grade < 38) {
      return grade;
    }

    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

    return nextMultipleOfFive - grade < 3 ? nextMultipleOfFive : grade;
  });
};
```

</details>

---

## Problem 3: Time Conversion

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | String Parsing |
| **Function** | `timeConversion(s)` |
| **Time / Space** | `O(1)` / `O(1)` |

### 📝 Problem Description
You are given a time string in **12-hour clock format**, including hours, minutes, seconds, and an AM/PM suffix. Convert the given time into its equivalent **24-hour clock format**.

The 24-hour format uses hours from `00` through `23` and does **not** include an AM/PM suffix.

Remember the following special cases:

- `12:xx:xxAM` → `00:xx:xx`
- `12:xx:xxPM` → `12:xx:xx`
- Any other PM hour must be increased by 12
- Other AM hours remain unchanged

Return the converted time as a string in `HH:MM:SS` format.

### 🔧 Function Signature
```js
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
};
```

### 🧪 Examples
```text
Example 1
Input:  s = "07:05:45PM"
Output: "19:05:45"

Example 2
Input:  s = "12:00:00AM"
Output: "00:00:00"

Example 3
Input:  s = "12:30:45PM"
Output: "12:30:45"
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var timeConversion = function (s) {
  if (typeof s !== "string" || s.length < 8) {
    return "";
  }

  const period = s.slice(-2).toUpperCase();
  const minutes = s.slice(3, 5);
  const seconds = s.slice(6, 8);

  let hours = Number(s.slice(0, 2));

  if (Number.isNaN(hours)) {
    return "";
  }

  if (period === "AM") {
    hours = hours === 12 ? 0 : hours;
  } else {
    hours = hours === 12 ? 12 : hours + 12;
  }

  return `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
};
```

</details>

---

## Problem 4: String Repeat

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Strings, Loops |
| **Function** | `repeatStr(n, s)` |
| **Time / Space** | `O(n × len(s))` / `O(n × len(s))` |

### 📝 Problem Description
Given a non-negative integer `n` and a string `s`, return a new string formed by **repeating `s` exactly `n` times**.

- The resulting string must preserve the original order of the characters in `s`.
- If `n` is zero, return an empty string.
- You may use built-in string methods or implement the repetition using a loop.

### 🔧 Function Signature
```js
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
};
```

### 🧪 Examples
```text
Example 1
Input:  n = 3, s = "ha"
Output: "hahaha"

Example 2
Input:  n = 0, s = "hello"
Output: ""

Example 3
Input:  n = 4, s = "a"
Output: "aaaa"
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var repeatStr = function (n, s) {
  if (typeof n !== "number" || n <= 0 || typeof s !== "string") {
    return "";
  }

  return s.repeat(n);
};
```

</details>

---

## Problem 5: Reversed Strings

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Strings |
| **Function** | `solution(str)` |
| **Time / Space** | `O(n)` / `O(n)` |

### 📝 Problem Description
Given a string `str`, return a new string containing the same characters in **reverse order**.

- The first character of the original string must become the last character of the result, and vice versa.
- The original string must **not** be modified.
- An empty string should return an empty string.

### 🔧 Function Signature
```js
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
};
```

### 🧪 Examples
```text
Example 1
Input:  str = "world"
Output: "dlrow"

Example 2
Input:  str = "hello"
Output: "olleh"

Example 3
Input:  str = ""
Output: ""
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var solution = function (str) {
  if (typeof str !== "string") {
    return "";
  }

  return [...str].reverse().join("");
};
```

</details>

---

## Problem 6: Sum of Positive

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Arrays, Reduce |
| **Function** | `positiveSum(arr)` |
| **Time / Space** | `O(n)` / `O(1)` |

### 📝 Problem Description
Given an array of integers, calculate the **sum of all positive numbers** in the array.

- A positive number is any number **strictly greater than zero**. Ignore zero and all negative numbers.
- If the array contains no positive numbers or is empty, return `0`.

### 🔧 Function Signature
```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
};
```

### 🧪 Examples
```text
Example 1
Input:  arr = [1, -4, 7, 12]
Output: 20
Explanation: The positive numbers are 1, 7, and 12. Their sum is 20.

Example 2
Input:  arr = [-1, -2, 0, -5]
Output: 0
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var positiveSum = function (arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};
```

</details>

---

## Problem 7: Grasshopper — Summation

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Math Formula |
| **Function** | `summation(num)` |
| **Time / Space** | `O(1)` / `O(1)` |

### 📝 Problem Description
Given a positive integer `num`, calculate the sum of all integers from `1` through `num`, inclusive.

```text
For example, when num = 4, the required sum is:
1 + 2 + 3 + 4 = 10
```

Return the calculated sum as an integer. Consider an iterative solution and the **mathematical formula** for the sum of consecutive positive integers.

### 🔧 Function Signature
```js
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
};
```

### 🧪 Examples
```text
Example 1
Input:  num = 8
Output: 36

Example 2
Input:  num = 1
Output: 1
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var summation = function (num) {
  if (typeof num !== "number" || num <= 0) {
    return 0;
  }

  return (num * (num + 1)) / 2;
};
```

</details>

---

## Problem 8: Convert a Boolean to a String

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Type Conversion |
| **Function** | `booleanToString(b)` |
| **Time / Space** | `O(1)` / `O(1)` |

### 📝 Problem Description
Given a Boolean value `b`, convert it into its corresponding **string** representation.

- If `b` is `true`, return the string `"true"`.
- If `b` is `false`, return the string `"false"`.
- The return value must be a **string**, not a Boolean.

### 🔧 Function Signature
```js
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
};
```

### 🧪 Examples
```text
Example 1
Input:  b = true
Output: "true"

Example 2
Input:  b = false
Output: "false"
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var booleanToString = function (b) {
  return b ? "true" : "false";
};
```

</details>

---

## Problem 9: Fizz Buzz

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Loops, Modulo |
| **Function** | `fizzBuzz(n)` |
| **Time / Space** | `O(n)` / `O(n)` |

### 📝 Problem Description
Given an integer `n`, generate a sequence of strings representing the integers from `1` through `n`.

For each integer `i`, apply the following rules **in order**:

- If `i` is divisible by **both 3 and 5**, use `"FizzBuzz"`.
- If `i` is divisible by **3 only**, use `"Fizz"`.
- If `i` is divisible by **5 only**, use `"Buzz"`.
- Otherwise, use the decimal string representation of `i`.

Return an array containing exactly `n` strings in the same order as the integers.

> ⚠️ **Important:** Check divisibility by both 3 and 5 **before** checking either one individually.

### 🔧 Function Signature
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
};
```

### 🧪 Examples
```text
Example 1
Input:  n = 5
Output: ["1", "2", "Fizz", "4", "Buzz"]

Example 2
Input:  n = 15
Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz",
         "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var fizzBuzz = function (n) {
  if (typeof n !== "number" || n <= 0) {
    return [];
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};
```

</details>

---

## Problem 10: Running Sum of 1D Array

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Arrays, Prefix Sum |
| **Function** | `runningSum(nums)` |
| **Time / Space** | `O(n)` / `O(n)` |

### 📝 Problem Description
Given an array of integers `nums`, calculate its **running sum**.

The running sum at index `i` is the sum of all elements from index `0` through index `i`, inclusive.

```text
runningSum[i] = Σ (j = 0 → i) nums[j]
```

Return a new array containing the running sum at every index.

### 🔧 Function Signature
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
};
```

### 🧪 Examples
```text
Example 1
Input:  nums = [1, 2, 3, 4]
Output: [1, 3, 6, 10]
Explanation:
• Index 0: 1
• Index 1: 1 + 2 = 3
• Index 2: 1 + 2 + 3 = 6
• Index 3: 1 + 2 + 3 + 4 = 10

Example 2
Input:  nums = [1, 1, 1, 1, 1]
Output: [1, 2, 3, 4, 5]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var runningSum = function (nums) {
  if (!Array.isArray(nums)) {
    return [];
  }

  let sum = 0;

  return nums.map((num) => (sum += num));
};
```

</details>

---

## Problem 11: Richest Customer Wealth

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | 2D Arrays, Reduce |
| **Function** | `maximumWealth(accounts)` |
| **Time / Space** | `O(r × c)` / `O(1)` |

### 📝 Problem Description
You are given a two-dimensional array called `accounts`, where each **row** represents a customer and each element in that row represents the amount of money the customer holds in a particular bank account.

- The **total wealth** of a customer is the sum of all values in their row.
- Your task is to calculate the total wealth of every customer and return the **maximum** total wealth found.
- Assume that all customers have the same number of bank accounts.

### 🔧 Function Signature
```js
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
};
```

### 🧪 Examples
```text
Example 1
Input:  accounts = [[1, 2, 3], [3, 2, 1]]
Output: 6
Explanation: Both customers have a total wealth of 6.

Example 2
Input:  accounts = [[1, 5], [7, 3], [3, 5]]
Output: 10
Explanation: The second customer has the highest wealth: 7 + 3 = 10.
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var maximumWealth = function (accounts) {
  if (!Array.isArray(accounts)) {
    return 0;
  }

  return accounts.reduce((maxWealth, customer) => {
    const wealth = Array.isArray(customer)
      ? customer.reduce((sum, amount) => sum + amount, 0)
      : 0;

    return Math.max(maxWealth, wealth);
  }, 0);
};
```

</details>

---

## Problem 12: Remove Duplicates from Sorted Array

| | |
|---|---|
| **Difficulty** | 🟡 Easy-Med |
| **Topic** | Two Pointers, In-Place |
| **Function** | `removeDuplicates(nums)` |
| **Time / Space** | `O(n)` / `O(1)` |

### 📝 Problem Description
Given an integer array `nums` **sorted in non-decreasing order**, remove duplicate values **in-place** so that each unique value appears exactly once.

- The relative order of the unique elements must remain unchanged.
- After removing duplicates, return the number of unique elements, `k`.
- The **first `k` positions** of `nums` must contain the unique elements in sorted order.
- You must modify the original array **without creating another array** to store the unique values.
- The contents of `nums` beyond index `k - 1` do not matter.

### 🔧 Function Signature
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
};
```

### 🧪 Examples
```text
Example 1
Input:  nums = [1, 1, 2]
Output: 2
After the function executes, the first two elements of nums must be: [1, 2]

Example 2
Input:  nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Output: 5
The first five elements must be: [0, 1, 2, 3, 4]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var removeDuplicates = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
```

</details>

---

## Problem 13: Contains Duplicate

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Set |
| **Function** | `containsDuplicate(nums)` |
| **Time / Space** | `O(n)` / `O(n)` |

### 📝 Problem Description
Given an integer array `nums`, determine whether any value appears **at least twice**.

- Return `true` if the array contains one or more duplicate values.
- Return `false` if every element is distinct.
- Two elements are considered duplicates if they have the same integer value, regardless of their positions in the array.

### 🔧 Function Signature
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
};
```

### 🧪 Examples
```text
Example 1
Input:  nums = [1, 2, 3, 1]
Output: true
Explanation: The value 1 appears twice.

Example 2
Input:  nums = [1, 2, 3, 4]
Output: false
Explanation: All elements are distinct.

Example 3
Input:  nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var containsDuplicate = function (nums) {
  if (!Array.isArray(nums)) {
    return false;
  }

  return new Set(nums).size !== nums.length;
};
```

</details>

---

## Problem 14: Move Zeroes

| | |
|---|---|
| **Difficulty** | 🟡 Easy-Med |
| **Topic** | Two Pointers, In-Place |
| **Function** | `moveZeroes(nums)` |
| **Time / Space** | `O(n)` / `O(1)` |

### 📝 Problem Description
Given an integer array `nums`, move **all occurrences of zero to the end** of the array while maintaining the **relative order** of all non-zero elements.

- You must perform this operation **in-place**, without creating another array for the result.
- For example, if the input is `[0, 1, 0, 3, 12]`, the non-zero elements must remain in the order `1, 3, 12`, and all zeros must be placed after them.
- Your function should **modify the original array** and return nothing.

### 🔧 Function Signature
```js
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
};
```

### 🧪 Examples
```text
Example 1
Input:  nums = [0, 1, 0, 3, 12]
Output after modification: [1, 3, 12, 0, 0]

Example 2
Input:  nums = [0, 0, 1]
Output after modification: [1, 0, 0]

Example 3
Input:  nums = [1, 2, 3]
Output after modification: [1, 2, 3]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var moveZeroes = function (nums) {
  if (!Array.isArray(nums)) {
    return;
  }

  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }

  while (write < nums.length) {
    nums[write] = 0;
    write++;
  }
};
```

</details>

---

## Problem 15: Merge Sorted Array

| | |
|---|---|
| **Difficulty** | 🟡 Medium |
| **Topic** | Two Pointers, In-Place |
| **Function** | `merge(nums1, m, nums2, n)` |
| **Time / Space** | `O(m + n)` / `O(1)` |

### 📝 Problem Description
You are given two integer arrays, `nums1` and `nums2`, sorted in **non-decreasing order**, along with two integers `m` and `n`.

- `nums1` has a total length of `m + n`. Its first `m` positions contain valid elements, while the remaining `n` positions are initialized to zero and reserved for the merged result.
- `nums2` contains exactly `n` valid elements.
- Merge the elements of `nums2` into `nums1` so that the final array contains all `m + n` elements in non-decreasing order.
- The merge must be performed **directly in `nums1`**. Do not return a separate merged array.

> ⚠️ **Important:** The zeros reserved at the end of `nums1` are **empty positions**, not necessarily actual input values.

### 🔧 Function Signature
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
};
```

### 🧪 Examples
```text
Example 1
Input:  nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
Output after modification: [1, 2, 2, 3, 5, 6]

Example 2
Input:  nums1 = [1], m = 1, nums2 = [], n = 0
Output after modification: [1]

Example 3
Input:  nums1 = [0], m = 0, nums2 = [1], n = 1
Output after modification: [1]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var merge = function (nums1, m, nums2, n) {
  if (!Array.isArray(nums1)) {
    return;
  }

  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
};
```

</details>

---

## Problem 16: 3Sum

| | |
|---|---|
| **Difficulty** | 🟡 Medium |
| **Topic** | Sorting, Two Pointers |
| **Function** | `threeSum(nums)` |
| **Time / Space** | `O(n²)` / `O(n)` |

### 📝 Problem Description
Given an integer array `nums`, find **all unique triplets** `[nums[i], nums[j], nums[k]]` such that the indices are distinct and the sum of the three corresponding values is zero.

```text
nums[i] + nums[j] + nums[k] = 0
```

Your solution must satisfy the following requirements:

- Each triplet must contain three elements whose sum is exactly zero.
- The same array element **cannot be used more than once** in a single triplet.
- The result must **not contain duplicate triplets**, even if the input contains repeated values.
- The order of the triplets in the final result does not matter.

Return an array containing all valid unique triplets. If no valid triplets exist, return an empty array.

### 🔧 Function Signature
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
};
```

### 🧪 Examples
```text
Example 1
Input:  nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
Explanation:
• -1 + -1 + 2 = 0
• -1 + 0 + 1 = 0
No other unique triplets satisfy the condition.

Example 2
Input:  nums = [0, 1, 1]
Output: []

Example 3
Input:  nums = [0, 0, 0]
Output: [[0, 0, 0]]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var threeSum = function (nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return [];
  }

  const sorted = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) {
      break;
    }

    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];

      if (sum === 0) {
        result.push([sorted[i], sorted[left], sorted[right]]);

        while (left < right && sorted[left] === sorted[left + 1]) {
          left++;
        }

        while (left < right && sorted[right] === sorted[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
```

</details>

---

## Problem 17: Plus One

| | |
|---|---|
| **Difficulty** | 🟡 Easy-Med |
| **Topic** | Carry Propagation |
| **Function** | `plusOne(digits)` |
| **Time / Space** | `O(n)` / `O(1)` (excluding output growth) |

### 📝 Problem Description
You are given a **non-empty array of digits** representing a non-negative integer.

- Each element contains a single digit, and the digits are arranged from the most significant digit to the least significant digit.
- The integer does not contain leading zeros, except when the number itself is zero.
- Increment the represented integer by one and return the resulting array of digits.
- You must correctly handle **carry propagation**. For example, adding one to a number ending in 9 may require carrying into the preceding digit.
- If every digit is 9, the resulting array will contain one additional digit.

### 🔧 Function Signature
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
};
```

### 🧪 Examples
```text
Example 1
Input:  digits = [1, 2, 9]
Output: [1, 3, 0]
Explanation: The number 129 becomes 130.

Example 2
Input:  digits = [4, 3, 2, 1]
Output: [4, 3, 2, 2]

Example 3
Input:  digits = [9, 9, 9]
Output: [1, 0, 0, 0]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var plusOne = function (digits) {
  if (!Array.isArray(digits) || digits.length === 0) {
    return [];
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};
```

</details>

---

## Problem 18: Reverse String

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Two Pointers, In-Place |
| **Function** | `reverseString(s)` |
| **Time / Space** | `O(n)` / `O(1)` |

### 📝 Problem Description
You are given an array of characters `s`. Reverse the order of the characters in the array.

- The reversal must be performed **in-place**, meaning you must modify the original array without creating another array to hold the reversed characters.
- The function should **return nothing**. After the function executes, the original array must contain the characters in reverse order.
- Consider using **two pointers**: one starting at the beginning of the array and another at the end.

### 🔧 Function Signature
```js
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
};
```

### 🧪 Examples
```text
Example 1
Input:  s = ["h", "e", "l", "l", "o"]
Output after modification: ["o", "l", "l", "e", "h"]

Example 2
Input:  s = ["H", "a", "n", "n", "a", "h"]
Output after modification: ["h", "a", "n", "n", "a", "H"]
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var reverseString = function (s) {
  if (!Array.isArray(s)) {
    return;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
```

</details>

---

## Problem 19: Length of Last Word

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Strings, Scanning |
| **Function** | `lengthOfLastWord(s)` |
| **Time / Space** | `O(n)` / `O(n)` (trimmed copy) |

### 📝 Problem Description
Given a string `s` consisting of words and spaces, return the **length of the last word** in the string.

- A word is defined as a **maximal sequence of non-space characters**. Words are separated by one or more spaces.
- The string may contain leading spaces, trailing spaces, or multiple consecutive spaces between words. These spaces must not affect the length of the last word.
- Your function should return the number of characters in the final word, **excluding any surrounding spaces**.

### 🔧 Function Signature
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
};
```

### 🧪 Examples
```text
Example 1
Input:  s = "Hello World"
Output: 5
Explanation: The last word is "World", which contains five characters.

Example 2
Input:  s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon".

Example 3
Input:  s = "luffy is still joyboy"
Output: 6
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var lengthOfLastWord = function (s) {
  if (typeof s !== "string") {
    return 0;
  }

  const trimmed = s.trim();

  if (trimmed === "") {
    return 0;
  }

  const lastSpaceIndex = trimmed.lastIndexOf(" ");

  return lastSpaceIndex === -1
    ? trimmed.length
    : trimmed.length - lastSpaceIndex - 1;
};
```

</details>

---

## Problem 20: Longest Common Prefix

| | |
|---|---|
| **Difficulty** | 🟢 Easy |
| **Topic** | Nested Loops |
| **Function** | `longestCommonPrefix(strs)` |
| **Time / Space** | `O(n × m)` / `O(m)` |

### 📝 Problem Description
Given an array of strings `strs`, find the **longest common prefix** shared by every string in the array.

- A prefix is a sequence of characters that appears at the beginning of a string. The common prefix must match across all strings, character by character, starting from index zero.
- If the strings do not share any common starting characters, return an **empty string**.
- If the array contains only one string, that entire string is the longest common prefix.
- If any string is empty, the longest common prefix must also be empty.

### 🔧 Function Signature
```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
};
```

### 🧪 Examples
```text
Example 1
Input:  strs = ["flower", "flow", "flight"]
Output: "fl"
Explanation: All three strings begin with "fl", but their next characters differ.

Example 2
Input:  strs = ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix shared by all three strings.

Example 3
Input:  strs = ["interspecies", "interstellar", "interstate"]
Output: "inters"
```

<details>
<summary>✅ <b>Solution</b> — <code>Solution.js</code></summary>

```js
var longestCommonPrefix = function (strs) {
  let result = "";
  if (!strs.length) {
    return result;
  }
  if (strs.length === 1) {
    return strs[0];
  }
  if (typeof strs[0] !== "string") {
    return result;
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (typeof strs[j] !== "string") {
        return result;
      }
      if (strs[0][i] !== strs[j][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;
};
```

</details>

---
---

## 🧪 How to Run the Solutions

All solutions live in a single file — [`Solution.js`](./Solution.js). Run any check with Node.js:

```bash
# 1. Syntax check
node --check Solution.js

# 2. Quick manual run
node -e "
const fs = require('fs');
const vm = require('vm');
const ctx = vm.createContext({});
vm.runInContext(fs.readFileSync('Solution.js', 'utf8'), ctx);
console.log(ctx.staircase(4));
console.log(ctx.fizzBuzz(15));
console.log(ctx.threeSum([-1, 0, 1, 2, -1, -4]));
"
```

---

## 🧠 Key Takeaways

| # | Problem | Technique to Remember |
|---|---------|-----------------------|
| 1 | Staircase | Build rows in an array, then `join("\n")` |
| 2 | Grading Students | `Math.ceil(g / 5) * 5` gives the next multiple of 5 |
| 3 | Time Conversion | Slice the string; special-case hour `12` only |
| 4 | String Repeat | `String.prototype.repeat` |
| 5 | Reversed Strings | `[...str].reverse().join("")` (spread keeps unicode safe) |
| 6 | Sum of Positive | `reduce` with a ternary accumulator |
| 7 | Grasshopper — Summation | Closed form `n(n + 1) / 2` |
| 8 | Boolean to String | Ternary → `"true"` / `"false"` |
| 9 | Fizz Buzz | Test `i % 15` **first**, then 3, then 5 |
| 10 | Running Sum | Mutate a running total inside `map` |
| 11 | Richest Customer Wealth | Nested `reduce` + `Math.max` |
| 12 | Remove Duplicates | Two pointers: read index vs. write index `k` |
| 13 | Contains Duplicate | Compare `Set.size` with `array.length` |
| 14 | Move Zeroes | Compact non-zeros to the front, fill the tail with zeros |
| 15 | Merge Sorted Array | Merge **from the back** to avoid overwriting |
| 16 | 3Sum | Sort → fix one element → two pointers + skip duplicates |
| 17 | Plus One | Walk from the end, carry only on `9` |
| 18 | Reverse String | Two pointers + array destructuring swap |
| 19 | Length of Last Word | `trim()` then `lastIndexOf(" ")` |
| 20 | Longest Common Prefix | Compare column by column across all strings |

---

<div align="center">

### ✨ Made with patience, `const`, and too many `console.log`s.

**STN-7 Problem Solving** · JavaScript ES6+ · 20 / 20 solved ✅

</div>
