const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    if (document.documentElement.classList.contains('light')) {
        document.body.style.background = 'linear-gradient(180deg,#fef6e7,#f0f3ff)';
        document.body.style.color = '#07202b';
        toggle.textContent = 'Chế độ sáng';
    } else {
        document.body.style.background = '';
        document.body.style.color = '';
        toggle.textContent = 'Chế độ tối';
    }
})