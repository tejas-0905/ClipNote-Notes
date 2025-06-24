const addBtn = document.getElementById('addBtn');
const toggleBtn = document.getElementById('toggleMode');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');
const notesContainer = document.getElementById('notesContainer');
const body = document.body;

const setTheme = (mode) => {
if (mode === 'dark') {
body.classList.remove('bg-green-100');
body.classList.add('bg-gray-900', 'text-white');
toggleBtn.textContent = 'light_mode';
} else {
    body.classList.add('bg-green-100');
    body.classList.remove('bg-gray-900', 'text-white');
    toggleBtn.textContent = 'dark_mode';
  }
    localStorage.setItem('theme', mode);
};
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
toggleBtn.addEventListener('click', () => {
  const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});
const setLayout = (layout) => {
if (layout === 'grid') {
    notesContainer.className = "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
  }
else if (layout === 'list') {
    notesContainer.className = "flex flex-col gap-4";
  }
 localStorage.setItem('layout', layout);
};
const savedLayout = localStorage.getItem('layout') || 'grid';
setLayout(savedLayout);
gridBtn.addEventListener('click', () => setLayout('grid'));
