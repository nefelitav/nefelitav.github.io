# Blog design

## Goal
Add a blog to the static GitHub Pages site. The home page shows the 4 latest posts with a "Read more" button. `blog/index.html` lists all posts. Each post is its own page.

## Structure
- `blog/posts.js` holds `POSTS`, an array of `{title, date, summary, file}`, newest first. It is the only place a post is registered.
- `blog/index.html` lists all posts from `POSTS`.
- `blog/posts/<slug>.html` is one plain HTML file per post. `_template.html` is the copy source.
- `index.html` gets a "Latest posts" section (first 4 of `POSTS`) and a "Read more" button linking to `blog/index.html`.
- `script.js` gains `renderPosts()` and the shared dark-mode toggle. Dark mode is saved in `localStorage` and applied on every page.
- `styles.css` gains a blog section and reuses the existing look.

## Adding a post
1. Copy `blog/posts/_template.html` to `blog/posts/<slug>.html` and fill it in.
2. Add an entry at the top of `POSTS` in `blog/posts.js`.

## Out of scope
RSS, tags, search, pagination. One sample post is included and can be deleted.
