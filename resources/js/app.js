import '../css/app.css';

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 30);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
}));

const calculator = document.querySelector('[data-calculator]');
if (calculator) {
    const input = (name) => calculator.querySelector(`[data-${name}]`);
    const result = calculator.querySelector('[data-result]');
    const quoteQuantity = document.querySelector('[data-quote-quantity]');
    const calculate = () => {
        const length = Number(input('length').value) || 0;
        const height = Number(input('height').value) || 0;
        const walls = Number(input('walls').value) || 0;
        const wastage = Number(input('wastage').value) || 0;
        const quantity = Math.ceil((length * height * walls * 3.56) * (1 + wastage / 100));
        result.textContent = quantity ? quantity.toLocaleString('en-IN') : '—';
        if (quoteQuantity) quoteQuantity.value = quantity || '';
    };
    calculator.querySelectorAll('input').forEach((field) => field.addEventListener('input', calculate));
    calculate();
}

const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
}), { threshold: .15 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const enquiryForm = document.querySelector('[data-whatsapp-enquiry]');
enquiryForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(enquiryForm);
    const message = [
        'Hello UMA Bricks, I would like to request a quote.',
        `Name: ${form.get('name')}`,
        `Phone: ${form.get('phone')}`,
        form.get('city') ? `City: ${form.get('city')}` : '',
        form.get('quantity') ? `Estimated quantity: ${form.get('quantity')} bricks` : '',
        form.get('message') ? `Requirement: ${form.get('message')}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/919936848070?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    enquiryForm.querySelector('[data-form-success]')?.removeAttribute('hidden');
});
