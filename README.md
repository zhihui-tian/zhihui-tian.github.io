# Zhihui Tian — personal academic website

Built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) and deployed to GitHub Pages by GitHub Actions.

## Where things live

| What | File |
| --- | --- |
| Site settings (name, URL, features) | `_config.yml` |
| Social links (email, Google Scholar) | `_data/socials.yml` |
| Home page text | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` |
| CV content (also rendered to PDF) | `_data/cv.yml` |
| Profile photo | `assets/img/prof_pic.jpg` |

## Workflow

1. Edit the files above and push to `main`.
2. `.github/workflows/deploy.yml` builds the site and publishes it to the `gh-pages` branch (about 3-4 minutes).
3. `.github/workflows/render-cv.yml` regenerates `assets/rendercv/rendercv_output/Zhihui_Tian_CV.pdf` whenever `_data/cv.yml` changes.

No local Ruby/Jekyll setup is required. For local preview see al-folio's `docs/INSTALL.md`.
