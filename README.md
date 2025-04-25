# Hypermart Checkout System

A real-time simulation of checkout queues in a hypermart, implemented using HTML, CSS, and JavaScript.

## 🚀 Features

- Automatically assigns new customers to the counter with the fewest items.
- Displays total number of items and number of customers in each queue.
- Real-time DOM updates.
---
## 📊 Time Complexity

For each customer:
- Finding the minimum total queue: O(1) since there are always 3 counters.
- Rendering: O(n) where n = total customers in all queues (acceptable for small datasets).
---
## 🧠 Assumptions

- Maximum of 3 checkout counters.
- Only positive integer item counts.
- Customers are assigned based on the current total items at the time of arrival.
  
---

## 📁 How to Run

1. Clone the repo:
```
git clone https://github.com/pinkeshroy/hypermart-checkout-system.git
```


2. Open `index.html` in a browser.# hypermart-checkout-system
3. 
---
**🧑‍💻 Author:**  
Crafted with ❤️ by [@pinkeshroy](https://github.com/pinkeshroy)
---
