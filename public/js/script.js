// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

// filter 
const container = document.getElementById('filters-container');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

// Scroll amount
const scrollAmount = 300;

// Check scroll position and show/hide buttons
function updateButtons() {
    if (container.scrollLeft > 0) {
        scrollLeftBtn.style.display = 'block';
    } else {
        scrollLeftBtn.style.display = 'none';
    }

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        scrollRightBtn.style.display = 'none';
    } else {
        scrollRightBtn.style.display = 'block';
    }
}

// Scroll left
scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Scroll right
scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Update buttons on scroll
container.addEventListener('scroll', updateButtons);

// Initial check
updateButtons();

