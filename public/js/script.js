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

// Only run filter code if elements exist
if (container && scrollLeftBtn && scrollRightBtn) {
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
}

// Tax Toggle Functionality
const taxToggle = document.getElementById('taxToggle');
const TAX_RATE = 0.18; // 18% tax rate

if (taxToggle) {
    taxToggle.addEventListener('change', function () {
        const priceElements = document.querySelectorAll('.listing-price');

        priceElements.forEach(priceElement => {
            const basePrice = parseFloat(priceElement.getAttribute('data-price'));

            if (taxToggle.checked) {
                // Show price with tax
                const priceWithTax = basePrice * (1 + TAX_RATE);
                priceElement.innerHTML = `$${priceWithTax.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / night <span class="text-muted small">+18% GST</span>`;
            } else {
                // Show price without tax
                priceElement.innerHTML = `$${basePrice.toLocaleString("en-US")}/night`;
            }
        });
    });
}

// Form Loading Spinner Functionality
document.addEventListener('DOMContentLoaded', function () {
    const newListingForm = document.getElementById('new-listing-form');
    const editListingForm = document.getElementById('edit-listing-form');
    const loadingOverlay = document.getElementById('loading-overlay');

    // Handle new listing form submit
    if (newListingForm && loadingOverlay) {
        newListingForm.addEventListener('submit', function (e) {
            // Only show loader if form is valid (Bootstrap validation already prevents invalid submission)
            if (this.checkValidity()) {
                // Show loading overlay
                loadingOverlay.style.display = 'flex';

                // Disable submit button to prevent double submission
                const submitBtn = document.getElementById('submit-btn');
                if (submitBtn) {
                    submitBtn.disabled = true;
                }
            }
        });
    }

    // Handle edit listing form submit
    if (editListingForm && loadingOverlay) {
        editListingForm.addEventListener('submit', function (e) {
            // Only show loader if form is valid (Bootstrap validation already prevents invalid submission)
            if (this.checkValidity()) {
                // Show loading overlay
                loadingOverlay.style.display = 'flex';

                // Disable submit button to prevent double submission
                const submitBtn = document.getElementById('submit-btn');
                if (submitBtn) {
                    submitBtn.disabled = true;
                }
            }
        });
    }
});

