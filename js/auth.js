// Authentication JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Role selection functionality
    window.selectRole = function(role) {
        document.querySelectorAll('.role-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        event.currentTarget.classList.add('selected');
        
        // Show/hide additional fields based on role
        const subjectField = document.getElementById('subjectField');
        const hourlyRateField = document.getElementById('hourlyRateField');
        
        if (role === 'tutor') {
            subjectField.style.display = 'block';
            hourlyRateField.style.display = 'block';
        } else {
            subjectField.style.display = 'none';
            hourlyRateField.style.display = 'none';
        }
    };

    // Check URL parameters for pre-selected role
    const urlParams = new URLSearchParams(window.location.search);
    const roleParam = urlParams.get('role');
    if (roleParam && (roleParam === 'student' || roleParam === 'tutor')) {
        selectRole(roleParam);
        document.querySelector(`input[value="${roleParam}"]`).checked = true;
    }

    // Form submission handlers
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                role: document.querySelector('input[name="role"]:checked')?.value,
                subjects: document.getElementById('subjects')?.value,
                hourlyRate: document.getElementById('hourlyRate')?.value
            };

            // Basic validation
            if (!formData.role) {
                alert('Please select whether you are a student or tutor');
                return;
            }

            // Store user data in localStorage (for demo purposes)
            localStorage.setItem('currentUser', JSON.stringify(formData));
            
            // Redirect to appropriate dashboard
            if (formData.role === 'student') {
                window.location.href = 'student-dashboard.html';
            } else {
                window.location.href = 'tutor-dashboard.html';
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                role: document.getElementById('role').value
            };

            // For demo purposes, just redirect
            // In real app, you would validate against backend
            if (formData.role === 'student') {
                window.location.href = 'student-dashboard.html';
            } else {
                window.location.href = 'tutor-dashboard.html';
            }
        });
    }
});