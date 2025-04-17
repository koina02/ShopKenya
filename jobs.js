// jobs.js
document.addEventListener('DOMContentLoaded', () => {
  const jobList = document.getElementById('job-listings');
  const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');

  if (jobs.length === 0) {
    jobList.innerHTML = '<p>No jobs posted yet. Check back soon!</p>';
  } else {
    jobs.reverse().forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('feature');
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
      `;
      jobList.appendChild(jobCard);
    });
  }
});
