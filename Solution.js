// -------- Problem 1: Staircase - Solution ----------- //

/**
 * @param {number} n
 * @return {string}
 */
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

// -------- Problem 2: Grading Students - Solution ----------- //

/**
 * @param {number[]} grades
 * @return {number[]}
 */
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

// -------- Problem 3: Time Conversion - Solution ----------- //

/**
 * @param {string} s
 * @return {string}
 */
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

// -------- Problem 4: String Repeat - Solution ----------- //

/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  if (typeof n !== "number" || n <= 0 || typeof s !== "string") {
    return "";
  }

  return s.repeat(n);
};

// -------- Problem 5: Reversed Strings - Solution ----------- //

/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
  if (typeof str !== "string") {
    return "";
  }

  return [...str].reverse().join("");
};

// -------- Problem 6: Sum of Positive - Solution ----------- //

/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};

// -------- Problem 7: Grasshopper — Summation - Solution ----------- //

/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  if (typeof num !== "number" || num <= 0) {
    return 0;
  }

  return (num * (num + 1)) / 2;
};

// -------- Problem 8: Convert a Boolean to a String - Solution ----------- //

/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  return b ? "true" : "false";
};

// -------- Problem 9: Fizz Buzz - Solution ----------- //

/**
 * @param {number} n
 * @return {string[]}
 */
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

// -------- Problem 10: Running Sum of 1D Array - Solution ----------- //

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (!Array.isArray(nums)) {
    return [];
  }

  let sum = 0;

  return nums.map((num) => (sum += num));
};

// -------- Problem 11: Richest Customer Wealth - Solution ----------- //

/**
 * @param {number[][]} accounts
 * @return {number}
 */
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

// -------- Problem 12: Remove Duplicates from Sorted Array - Solution ----------- //

/**
 * @param {number[]} nums
 * @return {number}
 */
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

// -------- Problem 13: Contains Duplicate - Solution ----------- //

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (!Array.isArray(nums)) {
    return false;
  }

  return new Set(nums).size !== nums.length;
};

// -------- Problem 14: Move Zeroes - Solution ----------- //

/**
 * @param {number[]} nums
 * @return {void}
 */
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

// -------- Problem 15: Merge Sorted Array - Solution ----------- //

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
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

// -------- Problem 16: 3Sum - Solution ----------- //

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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

// -------- Problem 17: Plus One - Solution ----------- //

/**
 * @param {number[]} digits
 * @return {number[]}
 */
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

// -------- Problem 18: Reverse String - Solution ----------- //

/**
 * @param {string[]} s
 * @return {void}
 */
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

// -------- Problem 19: Length of Last Word - Solution ----------- //

/**
 * @param {string} s
 * @return {number}
 */
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

// ---------- Problem 20: Longest Common Prefix - Solution --------//

/**
 * @param {string[]} strs
 * @return {string}
 */
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
