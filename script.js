//your JS code here. If required.
function createPromise(promiseNumber) {
    const delay = Math.floor(Math.random() * 3) + 1; 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay);
        }, delay * 1000); 
    });
}

Promise.all([createPromise(1), createPromise(2), createPromise(3)])
    .then((results) => {
        
        const output = document.getElementById('output');
        output.innerHTML = '';

        let totalTime = 0;
        results.forEach((time, index) => {
            totalTime = Math.max(totalTime, time);

			const row = document.createElement('tr');
            row.innerHTML = `<td>Promise ${index + 1}</td><td>${time.toFixed(3)}</td>`;
            output.appendChild(row);
        });

        // Add the total row
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
        output.appendChild(totalRow);
    });








			