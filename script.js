const counters = [
    { queue: [], total: 0 },
    { queue: [], total: 0 },
    { queue: [], total: 0 },
  ];
  
  function assignCustomer(e) {
    console.log(e)
    e.preventDefault();
    const itemCount = parseInt(document.getElementById("itemInput").value);
    if (isNaN(itemCount) || itemCount <= 0) return;
  
    // Find the best counter to assign the customer
    let minTotal = Infinity;
    let chosenIndex = 0;
  
    counters.forEach((counter, i) => {
      if (counter.total < minTotal) {
        minTotal = counter.total;
        chosenIndex = i;
      }
    });
  
    // Push the customer to the chosen counter
    counters[chosenIndex].queue.push(itemCount);
    counters[chosenIndex].total += itemCount;

    minTotal = Infinity;
    let nextIndex = 0;
  
    counters.forEach((counter, i) => {
      if (counter.total < minTotal) {
        minTotal = counter.total;
        nextIndex = i;
      }
    });
  
    render();
    document.querySelectorAll('.counter').forEach(c => c.classList.remove('active'));
    document.getElementById(`counter-${nextIndex}`).classList.add('active');
  }
  
  function render() {
    counters.forEach((counter, i) => {
      const counterDiv = document.getElementById(`counter-${i}`);
      const queueUl = counterDiv.querySelector(".queue");
      const totalSpan = counterDiv.querySelector(".total");
      const customerSpan = counterDiv.querySelector(".customers");
  
      queueUl.innerHTML = "";
      counter.queue.forEach(items => {
        const li = document.createElement("li");
        li.textContent = `${items} items`;
        queueUl.appendChild(li);
      });
  
      totalSpan.textContent = counter.total;
      customerSpan.textContent = counter.queue.length;
    });
  
    document.getElementById("itemInput").value = "";
  }
  