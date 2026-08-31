---
title: "How I Made This Blog: A Beginner's Guide to Astro, GitHub, and Vercel"
description: "A simple guide on how to set up an Astro site."
pubDatetime: 2026-08-30T12:00:00+09:00
lang: en
tags: [blog, astro, github, vercel]
---

> **Information**
>
> I'm using a Mac, Ghostty for the terminal, and Zed as my code editor. The sample project used in this post is [astro-blog-example](https://github.com/imjhk03/astro-blog-example).

Someone asked me how I set up this blog. They were not familiar with Astro, GitHub, Vercel, or the other tools involved, so I wanted to explain the whole process from the beginning.

I used GitHub to keep the website's source code, and connected that repository to Vercel. Astro turns my Markdown files into web pages, and Vercel publishes those pages whenever I push a change to GitHub.

This post is a rough, reproducible guide to that setup. It is written for someone who may be opening a terminal for the first time, but it also contains enough explicit information for an AI coding agent to perform the setup.

## The four pieces

There are four pieces to understand before we start.

### Astro

[Astro](https://astro.build/) turns my writing into web pages.

I write a post in Markdown. Markdown is a simple way to write text with headings, links, pictures, and lists. Astro reads the Markdown and makes an HTML page that a browser can understand.

You can think of Astro as a helpful robot:

1. I give it my writing.
2. It puts the writing into the blog design.
3. It makes pages that browsers can show.

Astro also makes the home page, post list, tag pages, RSS feed, sitemap, and search files.

## AstroPaper

Astro has ready-made [themes](https://astro.build/themes/1/) that we can use to design a blog. A theme already has many things that a blog needs:

- a home page
- a page that lists posts
- dark and light themes
- tags
- mobile-friendly design
- an RSS feed
- a sitemap
- draft posts
- search support

You can change the design to feel like yours later. I'm using [AstroPaper](https://astro.build/themes/details/astropaper/).

### GitHub

[GitHub](https://github.com) is a website that stores code and other project files.

It is also like a time machine. When I save a group of changes, GitHub can remember what the project looked like at that time. The project stored on GitHub is called a **repository**, or **repo** for short.

GitHub is not where this website is shown to visitors. It is where to keep a safe copy of the website's files.

### Vercel

[Vercel](https://vercel.com/) takes the files from GitHub, runs Astro, and puts the finished pages on the internet.

When I connect GitHub and Vercel, Vercel watches the repo. When I push new files to GitHub, Vercel builds the website again.

That means this:

```text
write a post
    ↓
save the file
    ↓
send the change to GitHub
    ↓
Vercel builds the site
    ↓
the new post appears online
```

## What you need before starting

You need:

1. A GitHub account.
2. A Vercel account. Signing in with GitHub is the simplest option.
3. Node.js and npm installed on your computer.
4. A text editor. VS Code is a practical choice, but any editor will work.
5. (Optional) A domain name if you want an address such as `myname.com`. Vercel provides a temporary deployment address while you are setting things up, such as `myname-vercel.vercel.app`.

### What are Node.js and npm?

**Node.js** is a program that lets JavaScript run on a computer.

JavaScript is a programming language. A web browser can run JavaScript inside a web page. Node.js lets other JavaScript programs run outside the browser too.

Astro is one of those JavaScript programs. The Astro development server and the Astro build tool need Node.js to run.

Think of Node.js as the engine in a car:

- Astro is the car that does the work.
- Node.js is the engine that makes Astro move.
- Without Node.js, the Astro commands cannot start.

You do not need to write Node.js code for this blog. You only need to install Node.js so the other tools can use it.

**npm** means **Node Package Manager**. It is installed together with Node.js.

A **package** is a small piece of ready-made code. Astro and other tools are packages.

npm helps in two important ways:

1. It downloads the packages that the project needs.
2. It starts commands written in the project's `package.json` file.

Think of npm as a helper who brings the right tools from a toolbox.

**How they work together**

When I type these commands:

```bash
npm install
npm run dev
npm run build
```

this is what happens:

1. `npm install` reads the project's shopping list and downloads Astro and the other packages.
2. `npm run dev` asks npm to start Astro. Node.js runs Astro, and I can practice the website on my computer.
3. `npm run build` asks npm to start Astro's build job. Node.js runs Astro, and Astro makes the finished website files.

The project has three important places:

- `package.json` is the list of tools the project needs.
- `package-lock.json` remembers the exact versions installed.
- `node_modules/` is the local folder where npm puts those tools.

You normally do not edit `node_modules/` or upload it to GitHub. If it disappears, `npm install` can make it again.

### Check that they are installed

Open **Terminal** on macOS or Linux, or PowerShell on Windows. A terminal is a text box where you can give instructions to your computer.

Type:

```bash
node --version
npm --version
```

The computer should print two version numbers.
![Terminal showing the installed Node.js and npm version numbers](/images/2026/08/30/image2.png)

Astro's current installation guide asks for Node.js `v22.12.0` or newer. If the computer says that `node` or `npm` cannot be found, install the current LTS version from [nodejs.org](https://nodejs.org/en/download/), open a new terminal, and try again.

For me, I already have `Homebrew` installed, so I used `brew install npm` to install npm.
![Terminal showing Homebrew installing Node.js and its dependencies](/images/2026/08/30/image1.png)

## Start with a clean AstroPaper project

We will start with a brand-new project. This is like getting an empty notebook with a nice cover. It gives you the blog design, but none of my personal writing or pictures.

Run this command:

```bash
npm create astro@latest -- --template satnaing/astro-paper
```

A setup wizard will ask questions. Tell it:

- which folder should hold the project, such as `my-blog`. For me, I used `Desktop/my-blog` for the example.
- yes, install the packages
- yes, start Git if the wizard asks

![Astro's setup wizard creating the my-blog project](/images/2026/08/30/image3.png)

Then go into the new folder:

```bash
cd my-blog
npm install
npm run dev
```

![Terminal showing npm install and the Astro development server starting](/images/2026/08/30/image4.png)
![Finder showing the new my-blog project files](/images/2026/08/30/image6.png)

The terminal will show a local address, usually `http://localhost:4321/`. Open that address in your browser.

![AstroPaper starter home page running at localhost](/images/2026/08/30/image5.png)

The word **local** means “only on your computer.” At this point, other people cannot see your site yet.

## Tell Astro where the blog posts live

The clean AstroPaper project looks for posts in `src/content/posts/`. My blog uses a different folder: `src/data/blog/`. Make this small configuration change before creating your first post.

Open `src/content.config.ts` and find:

```typescript
export const BLOG_PATH = "src/content/posts";
```

Change it to:

```typescript
export const BLOG_PATH = "src/data/blog";
```

The file also has a loader whose `base` uses `BLOG_PATH`. Leave that part connected to `BLOG_PATH`. This tells Astro to read Markdown files from the same `src/data/blog/` folder described in this guide.

### Give the website your name

The main settings are in `astro-paper.config.ts` in the project root. A setting is a value that tells the website what to say or do. Open the file in any code editor; for me, I'm using Zed.
![Zed showing the Astro site configuration file](/images/2026/08/30/image7.png)

The important settings look like this:

```ts
import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://your-project.vercel.app/",
    title: "Your Name",
    description: "A short description of my blog",
    author: "Your Name",
    profile: "https://example.com/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Seoul",
  },
});
```

Change the example values:

- `title` is the site name.
- `url` is the public website address. If you do not own a domain, use the Vercel address you receive after deployment, such as `https://your-project.vercel.app/`. You can replace it with a custom domain later.
- `description` is a short explanation of the site.
- `author` is your name.
- `profile` is the author's profile address.
- `ogImage` is the picture shown when a page is shared on social media.
- `lang` is the main language of the site. This guide uses `en` for English.
- `timezone` tells the site how to show dates.

If `ogImage` is `"profile.jpg"`, the picture should be at `public/profile.jpg`. The sample project already includes `public/default-og.jpg`.

This project has this line in `astro.config.ts`:

```js
site: config.site.url,
```

It tells Astro which real address belongs to the website. This helps Astro make the correct links, sitemap, RSS feed, and social media information.

If a different Astro project has a full address written directly in `astro.config.ts`, update that address too.

### Find the important folders

You do not need to understand every folder. These are the ones to remember:

```text
my-blog/
├── public/            # pictures and files visitors can use
├── src/
│   ├── components/    # small reusable pieces of the design
│   ├── data/blog/     # blog posts
│   ├── layouts/       # page shapes
│   ├── pages/         # website addresses
│   ├── styles/        # colors and other visual rules
│   └── utils/         # helper code
├── astro-paper.config.ts # your AstroPaper settings
├── astro.config.ts       # Astro's instructions
├── package.json          # list of tools
└── package-lock.json     # exact tool versions
```

The most important folder for writing is `src/data/blog/`. The clean project may not have this folder yet, so create it under `src`.
![Finder showing the src/data/blog folder](/images/2026/08/30/image8.png)

### Write your first post

Make a folder for the year, such as `src/data/blog/2026/`.

Then create a file such as:
`src/data/blog/2026/2026-08-30-my-first-post.md`

The ending `.md` means the file is Markdown.

At the top of the file, write a small information card called **frontmatter**:

```md
---
title: "My First Post"
description: "A short sentence about this post."
pubDatetime: 2026-08-30T12:00:00+09:00
tags: [blog]
draft: true
---

This is the first paragraph of my post.

## My first heading

This is more writing.
```

Frontmatter tells the blog important facts:

- `title` is the post's title.
- `description` is a short sentence used in lists and search.
- `pubDatetime` is the date and time. The `+09:00` part is the timezone.
- `tags` helps group similar posts.
- `draft: true` means “I am still working on this.”

When the post is ready, change `draft: true` to `draft: false`. A draft is not shown in the normal public post lists.

A filename also helps make the web address. The example file becomes a page under:
`/posts/2026/2026-08-30-my-first-post`

### Add a picture

Put a picture in `public/images/2026/08/30/photo.jpg`. Then write this in the post:

```md
![A description of the photo](/images/2026/08/30/photo.jpg)
```

The words inside the square brackets help people who cannot see the picture understand it.

## Practice and check the website

While writing, use the development server:

```bash
npm run dev
```

Then open the local address in your browser. The development server reads your source files while you work and is the easiest way to see changes.
![AstroPaper home page showing the new My First Post](/images/2026/08/30/image9.png)

To stop the development server, press `Control + C` (hold the Control key, then press C).

When you want to check the finished production version, run:

```bash
npm run build
```

![Terminal showing a successful Astro build and Pagefind indexing](/images/2026/08/30/image10.png)
A **build** is the moment when Astro turns the project into the finished files that can be published. It also refreshes the `dist/` folder.
In this project, the build:

1. checks Astro and TypeScript files;
2. makes the website files inside `dist/`;
3. makes the Pagefind search index.

Pagefind is the tool that helps visitors search the blog.

You can look at the finished build on your computer with:

```bash
npm run preview
```

![Browser showing the My First Post page in the local preview](/images/2026/08/30/image11.png)

The preview is still only on your computer, but it is closer to the version Vercel will publish. Important: `npm run preview` does not build the project. It only serves the files that already exist in `dist/`. After changing a post, run `npm run build` before running `npm run preview`, or you may see an older version without your new post.

If the build fails, look at the first error. Usual problems include:

- a spelling mistake in frontmatter;
- wrong spaces in frontmatter;
- a picture path that does not exist;
- a Markdown code block that was not closed;
- an old Node.js version.

## Put the project in GitHub

Now we will save the project online.

Git is the program that remembers changes. GitHub is the website that stores those memories and files.

First, make an empty repository on your GitHub account. If the project already exists on your computer, do not add another README, license, or `.gitignore` during this step.

For a sample project that goes with this post, a clear repository name is `astro-blog-example`. A repository name is just the label on the project box. For my personal blog, I use `jooheekim.me`, the custom domain I bought.
![GitHub's new repository form for astro-blog-example](/images/2026/08/30/image12.png)
![The empty astro-blog-example GitHub repository](/images/2026/08/30/image13.png)

Open a terminal in the folder where you created the blog, then run:

```bash
git init
git branch -M main
```

The word `main` is the name of the main line of the project.

Save the files:

```bash
git add .
git status --short
git diff --cached --name-only
git commit -m "Initialize Astro blog"
```

![Terminal showing the initial Git commit](/images/2026/08/30/image14.png)
A **commit** is a saved snapshot. The words after `-m` explain what was saved.

Before committing, look at the files listed by the two checking commands. Continue only if they are files you meant to share. Do not commit `.env` files, passwords, access tokens, private keys, or personal files. If you find one, stop and remove it from the staged list before continuing.

Connect the computer folder to the GitHub repository. Before running this command, replace `YOUR-USERNAME/YOUR-REPOSITORY` with your own GitHub username and repository name. These are placeholders, so do not run the command unchanged:

```bash
GITHUB_REPO="YOUR-USERNAME/YOUR-REPOSITORY"
git remote add origin "https://github.com/${GITHUB_REPO}.git"
git remote -v
```

For this sample post, the GitHub repository address is:

```bash
https://github.com/imjhk03/astro-blog-example.git
```

### Sign in to GitHub with GitHub CLI

For this guide, use **GitHub CLI** (`gh`) to sign in. It is a small helper program for GitHub. Its normal login opens a browser, so you do not need to create or renew a personal access token by hand.

Check whether it is installed:

```bash
gh --version
```

If the computer cannot find `gh`, install [GitHub CLI](https://cli.github.com/) and open a new terminal.

Start the sign-in flow:

```bash
gh auth login
```

When the questions appear, choose:

1. **GitHub.com**.
2. **HTTPS** for Git operations.
3. Authenticate Git with your GitHub credentials? **No**
4. **Login with a web browser**.

GitHub will show a one-time code and open a browser. Sign in there, enter the code, and approve the request. The CLI stores the login in the computer's credential store.

Make sure Git knows how to use that login:

```bash
gh auth setup-git
gh auth status
```

Now push the project:

```bash
git push -u origin main
```

![Terminal showing a successful push to GitHub](/images/2026/08/30/image15.png)
![The astro-blog-example repository with its files on GitHub](/images/2026/08/30/image16.png)
The command `git push` sends the saved snapshot from your computer to GitHub.

You should not need to paste a GitHub password or token. Read the [GitHub CLI login guide](https://cli.github.com/manual/gh_auth_login) or the [gh auth setup-git guide](https://cli.github.com/manual/gh_auth_setup-git) if the questions look different.

If the computer cannot open a browser, use GitHub Desktop or follow [GitHub's personal access token instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). A person should enter any secret themselves. **Never paste a password, access token, or private key into an AI chat, a Markdown file, a Git remote URL, or the project.**

Here are the four Git words you will use most often:

- `git add` chooses changes for the next snapshot.
- `git commit` saves the snapshot on your computer.
- `git push` sends it to GitHub.
- `git pull` gets newer changes from GitHub.

## Put the project online with Vercel

Vercel is the worker that turns the GitHub files into a public website.

1. Sign in to [Vercel](https://vercel.com/) with GitHub.
2. Choose **Add New Project**.
3. Choose **Import** next to your GitHub repository.
4. Use the repository root as the root directory.
5. Let Vercel choose Astro as the framework.
6. Check that the build command is `npm run build`.
7. If Vercel asks for an output directory, write `dist`.
8. Click **Deploy**.

![Vercel's new project page listing the astro-blog-example repository](/images/2026/08/30/image18.png)
![Vercel's project setup page for the Astro repository](/images/2026/08/30/image19.png)

If you cannot see your repository in Vercel, you may need to change the repository access in your GitHub settings.

![GitHub repository access settings for the Vercel connection](/images/2026/08/30/image17.png)
![Vercel showing the deployment in progress](/images/2026/08/30/image20.png)
![Vercel's deployment success page](/images/2026/08/30/image21.png)
For this static blog, you do not need a special Vercel adapter. Astro makes ordinary files, and Vercel can serve them.

The first deployment gives you a temporary Vercel address. Open it and check the home page, a post, pictures, and search.

For the sample project, it is [astro-blog-example-three.vercel.app](https://astro-blog-example-three.vercel.app/).

After GitHub and Vercel are connected, the normal trip is automatic:

```text
push to GitHub
    ↓
Vercel notices the change
    ↓
Vercel runs npm run build
    ↓
Vercel publishes the new files
```

## Give the site its own address

The temporary Vercel address is enough for testing. To use an address such as `myname.com`:

1. Open the Vercel project.
2. Open **Settings**.
3. Open **Domains**.
4. Add your domain.
5. Vercel will show DNS records.
6. Copy those exact records to the company where you bought the domain.
7. Wait for Vercel to check the domain.
8. Change `site.url` in `astro-paper.config.ts` to the final HTTPS address.
9. Build and deploy again.

**DNS** is the address book that helps a domain find the correct server.
Do not guess DNS numbers from an old tutorial. Use the values shown by your current Vercel project. For more information, check Vercel's guide [How do I add a custom domain to my Vercel project?](https://vercel.com/kb/guide/how-do-i-add-a-custom-domain-to-my-vercel-project).

## The everyday routine

After the first setup, publishing a post is small:

```bash
git pull origin main

# write or edit a Markdown file under src/data/blog/

npm run build
git add src/data/blog/2026/2026-08-30-my-second-post.md
git commit -m "Add second blog post"
git push origin main
```

The important idea is this: the GitHub project is the source of truth. Do not edit the website directly inside Vercel. The next GitHub deployment can replace direct changes.

## A recipe for an AI coding agent

An **AI coding agent** is a computer helper that can read files, change files, run commands, and explain what it did.

The agent can do most of the computer work. A person still needs to approve account sign-ins, GitHub access, Vercel access, payments, and DNS changes.

Give the agent these details:

```
SITE_TITLE       The name of the blog
AUTHOR           The author's name
DESCRIPTION      A short description
DOMAIN           The final HTTPS address, if there is one
GITHUB_REPO     The user's GitHub account and repository
TIMEZONE        An IANA timezone such as Asia/Seoul
```

Then follow this recipe:

1. Check that the computer is in the intended empty parent folder.
2. If the folder has an unrelated project or unsaved changes, stop and ask the person first.
3. Check `node --version`, `npm --version`, Git, and `gh --version`. Use Node.js `22.12.0` or newer. If `gh` is missing, ask the person to install GitHub CLI.
4. From the empty parent folder, run `npm create astro@latest -- --template satnaing/astro-paper` and create the project in a new folder such as `my-blog`.
5. Change into the new folder with `cd my-blog`. Run `npm install`, then start `npm run dev`. Make sure the starter opens locally, and stop the development server with `Control + C` before continuing.
6. Open `src/content.config.ts` and change `BLOG_PATH` from `src/content/posts` to `src/data/blog`. Make sure the loader still uses `BLOG_PATH` as its base.
7. Update `astro-paper.config.ts` with the person's title, name, description, profile URL, `site.url`, `site.lang: "en"`, and timezone. If there is no custom domain yet, keep a temporary URL and replace it with the Vercel URL after the first deployment.
8. Check `astro.config.ts`. Make sure its `site` value is `config.site.url`.
9. Add one example post under `src/data/blog/<year>/`. Set `draft: true` until the person says it is ready. To check a public route, use an existing published post or ask permission to temporarily use `draft: false`; this project hides draft posts from the generated public routes.
10. Run `npm run build`. Fix the real error if it is caused by the new files. Do not hide an error by turning off checks.
11. Run `npm run preview` only after the build succeeds. Remember that preview serves the existing `dist/` folder and does not rebuild it.
12. Check the output under `dist/` and confirm that Pagefind finished.
13. Check `git status`, `git log`, and `git remote -v`. If this is not yet a Git repository, run `git init` and `git branch -M main`. Stop if existing history is unclear; never overwrite it.
14. Authenticate with `gh auth login`, choose HTTPS and browser login, then run `gh auth setup-git`. If browser sign-in is unavailable, stop and ask the person to complete an approved authentication method. Never ask the person to paste a token into the agent chat, and never save it in the project.
15. If the person has asked for GitHub setup, verify that `GITHUB_REPO` is an empty repository. If it does not exist, ask the person to create it or explicitly authorize creating it; never guess its visibility. Add the remote only when there is no existing `origin`:

    Set `GITHUB_REPO` to the person's actual GitHub username and repository name. Do not run the command while it still contains placeholder text such as `YOUR-USERNAME` or `YOUR-REPOSITORY`:

    ```bash
    GITHUB_REPO="YOUR-USERNAME/YOUR-REPOSITORY"
    git remote add origin "https://github.com/${GITHUB_REPO}.git"
    git remote -v
    ```

16. Only commit or push when the person has asked for that Git action. For a new project, run `git add .`, inspect `git status --short` and `git diff --cached --name-only`, stop if `.env` files, credentials, private keys, or personal files are staged, then run `git commit -m "Initialize Astro blog"` and `git push -u origin main`.
17. Import the repository into Vercel with the Astro framework, `npm run build`, and `dist`.
18. Ask the person to complete any sign-in, permission, or DNS step that the agent cannot safely complete.
19. After deployment, check the Vercel address, the custom domain if one was configured, one post, `/rss.xml`, `/sitemap-index.xml`, and `/search`.

The agent must stop instead of guessing when:

- the folder contains a different project;
- the GitHub repo is not empty and its history is unclear;
- the user cannot prove they own the domain;
- GitHub or Vercel sign-in is not available;
- the build fails because of unrelated code;
- somebody asks to copy private passwords, keys, or personal content without permission;
- deleting files or rewriting Git history seems necessary.

The setup is finished when:

- `npm run build` works;
- the site works with `npm run preview`;
- a published sample post has a valid route;
- the correct GitHub repo contains the project;
- Vercel has a successful deployment;
- the site uses the correct domain and title;
- the person knows that future publishing means writing Markdown, building, committing, and pushing.

## Small dictionary

- **Website**: pages people can visit in a browser.
- **Browser**: an app that shows websites.
- **File**: saved information.
- **Folder**: a box that holds files.
- **Terminal**: a text box for giving commands to a computer.
- **Command**: an instruction typed into a terminal.
- **Local**: working only on your computer.
- **Build**: turning project files into finished website files.
- **Deploy**: putting the finished files online.
- **Repository**: a project folder saved by Git.
- **Commit**: a saved snapshot of a project.
- **Push**: sending commits to GitHub.
- **Domain**: the website's human-friendly address.
- **DNS**: the address book that points a domain to a server.

## The main idea

The website may look like one thing, but it is really a simple chain:

- I write in Markdown.
- Astro turns the writing into pages.
- GitHub keeps the project safe.
- Vercel publishes the pages.
- A domain gives the pages an easy address.

After the first setup, I do not need to build a server or upload each page by hand. I write a file, check the build, save the change, and push it to GitHub. I hope this guide makes it easier for you to start your first blog.

Useful references:

- [Astro installation and setup](https://docs.astro.build/en/install-and-setup/)
- [Astro's first blog tutorial](https://docs.astro.build/en/tutorial/1-setup/2/)
- [AstroPaper on GitHub](https://github.com/satnaing/astro-paper)
- [AstroPaper customization notes](https://github.com/satnaing/astro-paper/wiki/Customization)
- [GitHub: add locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [Astro on Vercel](https://vercel.com/docs/frameworks/frontend/astro)
- [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github)

Thanks for reading!
