const result = document.querySelector('.result');
const btns = document.querySelectorAll('a.action');
btns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        btns.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        const href = e.target.getAttribute('href');
        const res = await axios.get(`${href}`);

        if (Array.isArray(res.data)) {
            result.textContent = res.data.join(', ');
            return;
        }

        result.textContent = res.data;
    });
});