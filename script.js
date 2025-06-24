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
