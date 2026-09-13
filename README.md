## A05-DevStack

A05-DevStack is a React and TypeScript web application where users can explore development technologies and build their own technology stack.

## Technologies Used

1. React
2. TypeScript
3. Vite
4. Tailwind CSS
5. DaisyUI
6. React Toastify
7. Vercel

## Features

1. Explore technologies with category, difficulty, rating, and description.
2. Add and remove technologies from your own stack.
3. Responsive and interactive UI with toast notifications.


# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript/TypeScript. It makes React UI easier to write and understand.

## 2. What is the difference between props and state?

Props are data passed from parent to child. State is data managed inside a component and can change over time.

## 3. What does the `useState` hook do, and where did you use it?

`useState` stores and updates changing data in a component. I used it to store the technologies selected by the user.

## 4. What does the `useEffect` hook do, and why did you need it?

`useEffect` runs side effects such as data fetching. I used it to load technology data from the JSON file when the component loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each list item and efficiently update the UI when the list changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing UI based on a condition. I used it to show "Your stack is empty" when no technology is selected.

{selectedTechnologies.length === 0 && (
    <h3>Your stack is empty</h3>
)}


## 7. How do you pass data from a parent component to a child component, and how does a child send something back?

A parent sends data to a child using props. A child can send data back by calling a function passed from the parent through props.
