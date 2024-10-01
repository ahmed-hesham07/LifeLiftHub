document.getElementById('habitForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let habitName = document.getElementById('habitName').value;
    let days = document.getElementById('days').value;

    if (habitName && days) {
        let habitList = document.getElementById('habitList');
        let li = document.createElement('li');
        li.innerHTML = `${habitName} - ${days} days 
                    <button class="delete-btn">Delete</button>`;

        habitList.appendChild(li);

        document.getElementById('habitName').value = '';
        document.getElementById('days').value = '';

        li.querySelector('.delete-btn').addEventListener('click', function() {
            habitList.removeChild(li);
        });
    }
});
