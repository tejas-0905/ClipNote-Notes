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
listBtn.addEventListener('click', () => setLayout('list'));
const updateNote = () => {
  const textAreas = document.querySelectorAll('textarea');
  const notes = [];
textAreas.forEach(note => {
if (note.value.trim() !== '') {
      notes.push(note.value.trim());
    }
  });
localStorage.setItem('notes', JSON.stringify(notes));
};
const addNewNote = (text = '') => {
 const note = document.createElement('div');
note.className = `
    bg-white dark:bg-gray-800 border-l-4 border-yellow-400 rounded-xl shadow-lg p-4 flex flex-col justify-between h-56
    animate-fade-in transition-transform duration-300 transform hover:scale-105`;
const html = `
    <div class="flex justify-end gap-2 mb-2">
<button class="edit material-icons-round text-green-600 hover:text-green-400 transition">${text ? 'edit_note' : 'done'}</button>
<button class="delete material-icons-round text-red-600 hover:text-red-400 transition">delete</button>
