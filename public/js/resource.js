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
        console.log(res.status);
        if (res.status === 302 || res.status === 301) {
            window.location.href = res.request.responseURL;
            return;
        }
        result.textContent = res.data;
    });
});