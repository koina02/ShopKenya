// post-job.js
document.getElementById('job-form').addEventListener('submit', e => {
  e.preventDefault();

  const job = {
    title: document.getElementById('title').value,
    company: document.getElementById('company').value,
    location: document.getElementById('location').value,
    description: document.getElementById('description').value
  };

  const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  jobs.push(job);
  localStorage.setItem('jobs', JSON.stringify(jobs));

  alert('Job posted successfully!');
  window.location.href = 'jobs.html';
});
