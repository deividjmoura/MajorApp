document.addEventListener('DOMContentLoaded', function() {
    const toggleEventsList = document.getElementById('toggleEventsList');
    const eventsList = document.getElementById('eventsList');
    const modalEvents = document.getElementById('modalEvents');

    toggleEventsList.addEventListener('click', function(event) {
        event.preventDefault();
        eventsList.classList.toggle('hidden');
    });

    modalEvents.addEventListener('click', function() {
        modalEvents.classList.toggle('hidden');
    });
});
