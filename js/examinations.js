const select = document.getElementById('dropdown');
const groups = document.querySelectorAll('.group');

function showGroup(value) {
groups.forEach(gp => {
    if (gp.dataset.group === value) {
    gp.classList.add('show');
    } else {
    gp.classList.remove('show');
    }
});

// activate observer only on the exams of actively selected group
const activeGroupsExams = document.querySelectorAll(`.group[data-group="${value}"] .fade-up`);
activeGroupsExams.forEach(exam => observer.observe(exam));
}

// fade-up IntractionObserver
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target); // only animate on fisrt selection
    }
});
}, { threshold: 0.2 });

// show first category by default
showGroup(select.value);

// update on actively selected group change
select.addEventListener('change', (e) => {
showGroup(e.target.value);
});
