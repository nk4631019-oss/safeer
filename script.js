const form = document.getElementById('bookmarkForm');
const list = document.getElementById('bookmarkList');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('titleInput').value.trim();
  const url = document.getElementById('urlInput').value.trim();

  if (!title || !url) {
    alert('Please add both name and URL');
    return;
  }

  const link = document.createElement('a');
  link.href = url;
  link.textContent = 'Open ' + title;
  link.target = '_blank';
  link.rel = 'noopener';

  const card = document.createElement('p');
  card.className = 'bookmark-card';
  card.appendChild(link);

  list.appendChild(card);

  form.reset();
});