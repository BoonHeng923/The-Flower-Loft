document.querySelectorAll('.workshop-option').forEach(option => {
            option.addEventListener('click', function() {
                window.location.href = this.getAttribute('data-url');
            });
        });