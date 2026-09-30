function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function initDarkMode() {
    const toggle = document.getElementById('toggle');
    if (!toggle) return;

    toggle.checked = document.body.classList.contains('dark-mode');
    toggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', this.checked);
        localStorage.setItem('darkMode', this.checked ? '1' : '0');
    });
}

function formatPostDate(iso) {
    return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Fills #post-list from POSTS (blog/posts.js). data-limit caps the count,
// data-base is the path from the current page to blog/posts/.
function renderPosts() {
    const list = document.getElementById('post-list');
    if (!list || typeof POSTS === 'undefined') return;

    const limit = parseInt(list.dataset.limit, 10) || POSTS.length;
    const base = list.dataset.base || '';

    POSTS.slice(0, limit).forEach(function (post) {
        const li = document.createElement('li');

        const link = document.createElement('a');
        link.href = base + post.file;
        link.textContent = post.title;

        const date = document.createElement('time');
        date.className = 'post-date';
        date.dateTime = post.date;
        date.textContent = formatPostDate(post.date);

        li.append(link, date);
        list.appendChild(li);
    });
}

function renderFooter() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;

    const text = document.createElement('span');
    text.textContent = 'Accessible · WCAG 2.1 AA';
    footer.appendChild(text);
}

initDarkMode();
renderPosts();
renderFooter();
