document.addEventListener('DOMContentLoaded', function() {
    // Add fade in animation on page load
    document.querySelector('.card').classList.add('fade-in');

    // Add animation class on hover
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('move-animation');
        });

        button.addEventListener('mouseout', function() {
            this.classList.remove('move-animation');
        });
    });

    // Remove fade in animation after 1 second
    setTimeout(() => {
        document.querySelector('.card').classList.remove('fade-in');
    }, 1000);
});
