let scrollTimeout;

        document.addEventListener('DOMContentLoaded', function() {
            var popup = document.getElementById('popup');
            if (!sessionStorage.getItem('popupShown')) {
                window.onscroll = function() {
                    if (scrollTimeout) clearTimeout(scrollTimeout);

                    scrollTimeout = setTimeout(function() {
                        if (window.scrollY > 100 && !sessionStorage.getItem('popupShown')) {
                            popup.style.display = 'flex';
                        }
                    }, 5000); 
                };
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            var popup = document.getElementById('popup');
            if (!sessionStorage.getItem('popupShown')) {
                popup.style.display = 'flex';
            }
        });

        window.onscroll = function() {
            var popup = document.getElementById('popup');
            if (window.scrollY > 100 && !sessionStorage.getItem('popupShown')) {
                popup.style.display = 'flex';
            }
        };

        function closePopup() {
            var popup = document.getElementById('popup');
            popup.style.display = 'none';
            sessionStorage.setItem('popupShown', 'true');
        }

        function closeConfirmation() {
            var confirmation = document.getElementById('confirmation');
            confirmation.style.display = 'none';
        }

        function handleSubmit(event) {
            event.preventDefault();
            var nameInput = document.querySelector('input[name="first-name"]');
            var emailInput = document.querySelector('input[name="email"]');
            var name = nameInput.value.trim();
            var email = emailInput.value.trim();
        
            var namePattern = /^[A-Za-z\s]+$/;
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!namePattern.test(name)) {
                alert('Please enter a valid name.');
                return;
            }
        
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
        
            // Hide the popup and show the confirmation
            var popup = document.getElementById('popup');
            popup.style.display = 'none';
            sessionStorage.setItem('popupShown', 'true');
        
            var confirmation = document.getElementById('confirmation');
            confirmation.style.display = 'flex';
        }