# React setInterval Memory Leak

This repository demonstrates a common bug in React applications: using `setInterval` within the `useEffect` hook without proper cleanup. This leads to memory leaks and unexpected behavior.

## Bug Description
The `MyComponent` component uses `setInterval` to update a counter every second. However, it fails to clear the interval when the component unmounts, resulting in a memory leak.  The interval continues to run even after the component is no longer displayed, consuming resources unnecessarily.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the counter in the browser.  Unmount the component (e.g., navigate away from the page). The interval continues to run in the background.

## Solution
The solution involves using the return value of `useEffect` to clear the interval before the component unmounts.