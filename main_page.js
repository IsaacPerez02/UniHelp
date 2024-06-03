document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target.getAttribute('href');
            window.location.href = target;
        });
    });

    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();

    // Handle search input
    const searchInput = document.querySelector('header input');
    searchInput.addEventListener('input', event => {
        const query = event.target.value.toLowerCase();
        const noteItems = document.querySelectorAll('.note-item');
        const subjectItems = document.querySelectorAll('.subject-item');
        
        noteItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? 'block' : 'none';
        });

        subjectItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? 'block' : 'none';
        });
    });

    // Handle new entry button
    const newEntryButton = document.querySelector('.new-entry');
    newEntryButton.addEventListener('click', () => {
        // Implement new entry functionality
        alert('New Entry button clicked');
    });

    // Handle adding a new note
    const addNoteButton = document.querySelector('.add-note-button');
    addNoteButton.addEventListener('click', () => {
        const newNote = document.createElement('div');
        newNote.classList.add('note-item');
        newNote.innerHTML = `
            <h3>New Note</h3>
            <p>New note content</p>
        `;
        document.querySelector('.notes').appendChild(newNote);
    });

    // Handle logout button
    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', () => {
        // Implement logout functionality
        alert('Logout button clicked');
    });

    // Toggle profile summary panel
    const profileSummaryToggle = document.querySelector('.profile-summary-toggle');
    const profileSummary = document.querySelector('.profile-summary');
    const closeProfileSummary = document.querySelector('.close-profile-summary');

    profileSummaryToggle.addEventListener('click', () => {
        profileSummary.classList.toggle('open');
    });

    closeProfileSummary.addEventListener('click', () => {
        profileSummary.classList.remove('open');
    });
});
