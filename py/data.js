const form = document.getElementById('log-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const userid = document.getElementById('userid').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const accessPurpose = document.getElementById('access-purpose').value;
  const additionalNotes = document.getElementById('additional-notes').value;

  const logData = {
    username,
    userid,
    dateRange: `${startDate} - ${endDate}`,
    accessPurpose,
    additionalNotes,
  };

  console.log(logData);

  // Send log data to server or database
  fetch('/log-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(logData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});


