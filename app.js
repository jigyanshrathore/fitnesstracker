let counts = {
    pushup: 0,
    squat: 0,
    situp: 0
};

let totals = {
    pushup: 0,
    squat: 0,
    situp: 0
};

function increment(exercise) {
    counts[exercise]++;
    document.getElementById(`${exercise}-count`).textContent = counts[exercise];
}

function save(exercise) {
    totals[exercise] += counts[exercise];
    document.getElementById(`${exercise}-save`).textContent += `${counts[exercise]} - `;
    counts[exercise] = 0;
    document.getElementById(`${exercise}-count`).textContent = counts[exercise];
}

function showTotal() {
    let totalText = "Total Challenges Completed: ";
    totalText += `Push-ups: ${totals.pushup}, Squats: ${totals.squat}, Sit-ups: ${totals.situp}`;
    document.getElementById('total-el').textContent = totalText;
}

function letStartFromScratch() {
    counts = { pushup: 0, squat: 0, situp: 0 };
    totals = { pushup: 0, squat: 0, situp: 0 };

    document.getElementById('pushup-count').textContent = 0;
    document.getElementById('squat-count').textContent = 0;
    document.getElementById('situp-count').textContent = 0;

    document.getElementById('pushup-save').textContent = "Challenges Accomplished: ";
    document.getElementById('squat-save').textContent = "Challenges Accomplished: ";
    document.getElementById('situp-save').textContent = "Challenges Accomplished: ";

    document.getElementById('total-el').textContent = "Total Challenges Completed: ";
}
