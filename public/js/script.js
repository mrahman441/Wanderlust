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

// Star rating system
(() => {
    const starRating = document.querySelector('.star-rating');
    if (starRating) {
        const stars = starRating.querySelectorAll('i');
        const ratingInput = starRating.querySelector('input[type="hidden"]');

        stars.forEach(star => {
            star.style.cursor = 'pointer';
            star.style.fontSize = '1.5rem';

            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                ratingInput.value = rating;

                // Update star display
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.remove('fa-regular');
                        s.classList.add('fa-solid', 'text-warning');
                    } else {
                        s.classList.remove('fa-solid', 'text-warning');
                        s.classList.add('fa-regular');
                    }
                });
            });

            // Hover effect
            star.addEventListener('mouseenter', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                const currentRating = parseInt(ratingInput.value);

                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('fa-solid', 'text-warning');
                        s.classList.remove('fa-regular');
                    } else {
                        s.classList.remove('fa-solid', 'text-warning');
                        s.classList.add('fa-regular');
                    }
                });
            });
        });

        // Reset to actual rating when mouse leaves the entire star rating container
        starRating.addEventListener('mouseleave', () => {
            const currentRating = parseInt(ratingInput.value);
            stars.forEach((s, index) => {
                if (index < currentRating) {
                    s.classList.add('fa-solid', 'text-warning');
                    s.classList.remove('fa-regular');
                } else {
                    s.classList.remove('fa-solid', 'text-warning');
                    s.classList.add('fa-regular');
                }
            });
        });
    }
})();