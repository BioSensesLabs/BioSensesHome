document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginOverlay = document.getElementById('login-overlay');
    const dashboardContent = document.getElementById('dashboard-content');
    const errorMsg = document.getElementById('error-msg');
    const logoutBtn = document.getElementById('logout-btn');

    const showChangePwdLink = document.getElementById('show-change-pwd');
    const backToLoginLink = document.getElementById('back-to-login');
    const changePwdForm = document.getElementById('change-pwd-form');
    const cpMsg = document.getElementById('cp-msg');

    // Default Credentials
    const DEFAULT_USER = "BioSenses";
    const DEFAULT_PASS = "828282";

    // Helper Utility: Automatically calculates loyalty point expiry (Transaction Date + 1 Year)
    window.calculateExpiryDate = function(transactionDateStr) {
        const transDate = new Date(transactionDateStr);
        if (isNaN(transDate.getTime())) return null;
        transDate.setFullYear(transDate.getFullYear() + 1);
        return transDate.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
    };

    // Automatic listener for Earned Points Date -> Expiry Date (+1 Year)
    const dateInput = document.getElementById('date') || document.getElementById('transaction-date');
    const expiryInput = document.getElementById('expiry-date') || document.getElementById('points-expiry-date');

    if (dateInput && expiryInput) {
        dateInput.addEventListener('change', (e) => {
            const selectedDateValue = e.target.value;
            if (selectedDateValue) {
                const transactionDate = new Date(selectedDateValue);
                if (!isNaN(transactionDate.getTime())) {
                    transactionDate.setFullYear(transactionDate.getFullYear() + 1);
                    expiryInput.value = transactionDate.toISOString().split('T')[0];
                }
            }
        });
    }

    // ==========================================
    // EDIT & DELETE UTILITIES FOR POINTS TABLES
    // ==========================================
    window.deleteTableRecord = function(buttonElement, tableName) {
        const row = buttonElement.closest('tr');
        if (row) {
            if (confirm(`Are you sure you want to delete this record from ${tableName}?`)) {
                row.remove();
            }
        }
    };

    window.editTableRecord = function(buttonElement, tableName) {
        const row = buttonElement.closest('tr');
        if (!row) return;

        const cells = row.querySelectorAll('td:not(:last-child)'); // Exclude action column
        const isEditing = row.classList.toggle('editing-row');

        if (isEditing) {
            cells.forEach(cell => {
                const currentText = cell.textContent.trim();
                cell.innerHTML = `<input type="text" class="table-edit-input" value="${currentText}">`;
            });
            buttonElement.textContent = "Save";
            buttonElement.className = "btn btn-success btn-sm";
        } else {
            cells.forEach(cell => {
                const input = cell.querySelector('input');
                if (input) {
                    cell.textContent = input.value.trim();
                }
            });
            buttonElement.textContent = "Edit";
            buttonElement.className = "btn btn-outline btn-sm";
        }
    };

    // Function to grant access and display dashboard
    function unlockDashboard() {
        sessionStorage.setItem('isLoggedIn', 'true');
        if (errorMsg) errorMsg.style.display = 'none';
        if (loginOverlay) loginOverlay.style.display = 'none';
        if (dashboardContent) dashboardContent.style.display = 'block';
    }

    // Check if already logged in during this session
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        unlockDashboard();
    }

    // Handle Sign In
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username-input').value.trim();
            const passwordInput = document.getElementById('password-input').value;

            // Retrieve stored credentials or fallback to default
            const currentStoredUser = localStorage.getItem('biosenses_user') || DEFAULT_USER;
            const currentStoredPass = localStorage.getItem('biosenses_pass') || DEFAULT_PASS;

            if (usernameInput === currentStoredUser && passwordInput === currentStoredPass) {
                unlockDashboard();
            } else {
                if (errorMsg) errorMsg.style.display = 'block';
                const passInput = document.getElementById('password-input');
                if (passInput) passInput.value = '';
            }
        });
    }

    // Handle Sign Out
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('isLoggedIn');
            if (dashboardContent) dashboardContent.style.display = 'none';
            if (loginOverlay) loginOverlay.style.display = 'flex';
            if (loginForm) loginForm.reset();
        });
    }

    // Toggle Change Password Form
    if (showChangePwdLink) {
        showChangePwdLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginForm) loginForm.style.display = 'none';
            showChangePwdLink.style.display = 'none';
            if (errorMsg) errorMsg.style.display = 'none';
            if (changePwdForm) changePwdForm.style.display = 'block';
        });
    }

    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (changePwdForm) changePwdForm.style.display = 'none';
            if (loginForm) loginForm.style.display = 'block';
            if (showChangePwdLink) showChangePwdLink.style.display = 'block';
            if (cpMsg) cpMsg.style.display = 'none';
            if (changePwdForm) changePwdForm.reset();
        });
    }

    // Handle Password/Credential Update
    if (changePwdForm) {
        changePwdForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cpUser = document.getElementById('cp-username').value.trim();
            const cpOldPass = document.getElementById('cp-old-password').value;
            const cpNewPass = document.getElementById('cp-new-password').value;

            const currentStoredUser = localStorage.getItem('biosenses_user') || DEFAULT_USER;
            const currentStoredPass = localStorage.getItem('biosenses_pass') || DEFAULT_PASS;

            if (cpUser === currentStoredUser && cpOldPass === currentStoredPass) {
                if (cpNewPass.length < 4) {
                    if (cpMsg) {
                        cpMsg.textContent = "New password must be at least 4 characters.";
                        cpMsg.className = "feedback-msg error";
                        cpMsg.style.display = 'block';
                    }
                    return;
                }
                localStorage.setItem('biosenses_pass', cpNewPass);
                if (cpMsg) {
                    cpMsg.textContent = "Credentials updated successfully! Returning to login...";
                    cpMsg.className = "feedback-msg success";
                    cpMsg.style.display = 'block';
                }

                setTimeout(() => {
                    changePwdForm.style.display = 'none';
                    if (loginForm) loginForm.style.display = 'block';
                    if (showChangePwdLink) showChangePwdLink.style.display = 'block';
                    if (cpMsg) cpMsg.style.display = 'none';
                    changePwdForm.reset();
                }, 1500);
            } else {
                if (cpMsg) {
                    cpMsg.textContent = "Incorrect current username or password.";
                    cpMsg.className = "feedback-msg error";
                    cpMsg.style.display = 'block';
                }
            }
        });
    }
});
