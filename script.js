:root {
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --bg-color: #0b0f19;
    --surface-color: #111827;
    --surface-border: #1f2937;
    --text-primary: #f3f4f6;
    --text-secondary: #9ca3af;
    --accent-color: #3b82f6;
    --accent-hover: #2563eb;
    --success-color: #10b981;
    --error-color: #ef4444;
    --card-bg: #1e293b;
    --card-border: #334155;
    --transition-speed: 0.25s ease;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.4s ease forwards;
}

/* Common Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    transition: all var(--transition-speed);
    text-decoration: none;
}

.btn-primary {
    background-color: var(--accent-color);
    color: white;
    width: 100%;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
    background-color: var(--accent-hover);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.btn-success {
    background-color: var(--success-color);
    color: white;
    width: 100%;
}

.btn-success:hover {
    opacity: 0.9;
}

.btn-outline {
    background-color: transparent;
    color: var(--text-primary);
    border: 1px solid var(--surface-border);
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}

.btn-outline:hover {
    background-color: var(--surface-border);
}

.btn-card {
    background-color: rgba(59, 130, 246, 0.1);
    color: #60a5fa;
    width: 100%;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.btn-card:hover {
    background-color: var(--accent-color);
    color: white;
}

/* Login Overlay */
.login-overlay {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0b0f19 70%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    z-index: 100;
}

.login-card {
    background: var(--surface-color);
    border: 1px solid var(--surface-border);
    padding: 2.5rem;
    border-radius: 16px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
}

.login-header {
    text-align: center;
    margin-bottom: 2rem;
}

.logo-mark {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    letter-spacing: -0.5px;
}

.login-header h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.login-header p {
    color: var(--text-secondary);
    font-size: 0.875rem;
}

.input-group {
    margin-bottom: 1.25rem;
    text-align: left;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.input-group input {
    width: 100%;
    background-color: var(--bg-color);
    border: 1px solid var(--surface-border);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: white;
    font-size: 0.95rem;
    transition: border-color var(--transition-speed);
}

.input-group input:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.feedback-msg {
    font-size: 0.85rem;
    margin-top: 1rem;
    text-align: center;
}

.feedback-msg.error {
    color: var(--error-color);
}

.feedback-msg.success {
    color: var(--success-color);
}

.auth-footer-link {
    text-align: center;
    margin-top: 1.5rem;
}

.auth-footer-link a {
    color: var(--text-secondary);
    font-size: 0.875rem;
    text-decoration: none;
    transition: color var(--transition-speed);
}

.auth-footer-link a:hover {
    color: var(--accent-color);
}

#change-pwd-form h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
    text-align: center;
}

/* Dashboard Layout */
.app-header {
    background-color: var(--surface-color);
    border-bottom: 1px solid var(--surface-border);
    padding: 1.25rem 2rem;
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-mark-small {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 0.9rem;
}

.app-header h1 {
    font-size: 1.15rem;
    font-weight: 600;
    color: white;
}

.subtitle {
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.dashboard-main {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 2rem;
    flex: 1;
}

.section-title {
    margin-bottom: 2rem;
}

.section-title h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.35rem;
}

.section-title p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* Cards Grid */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.75rem;
}

.app-card {
    background-color: var(--surface-color);
    border: 1px solid var(--surface-border);
    border-radius: 12px;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform var(--transition-speed), border-color var(--transition-speed), box-shadow var(--transition-speed);
}

.app-card:hover {
    transform: translateY(-4px);
    border-color: #4b5563;
    box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.5);
}

.card-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
}

.blue-gradient { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
.purple-gradient { background: rgba(168, 85, 247, 0.15); color: #c084fc; }
.teal-gradient { background: rgba(20, 184, 166, 0.15); color: #2dd4bf; }

.card-body h3 {
    font-size: 1.15rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
}

.card-body p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
}

/* Footer */
.app-footer {
    text-align: center;
    padding: 1.5rem;
    border-top: 1px solid var(--surface-border);
    color: var(--text-secondary);
    font-size: 0.8rem;
    background-color: var(--surface-color);
}
