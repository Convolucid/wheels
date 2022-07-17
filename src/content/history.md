# version 3 - SVG, CSS
### 7.9.2022
After determining an initial strategy for CSS in the last version, I continued to refine my styling approach and began implementing graphics.  The main learning experience in this release has been creating an Illustrator SVG to HTML/CSS/JS workflow.  With multiple approaches to using and producing SVG files, sorting out the optimal method has been difficult.  Getting them imported with Webpack, using the `insertAdjacentHTML` method to inject them directly into elements, and manipulating them with CSS have all been troublesome for various reasons.

For my purposes, the SVG format's primary advantage is animation.  File size and responsiveness are enormous bonuses.  Transition effects and GSAP tweening are next on the feature list.

My comfort level with CSS keeps increasing.  I've gotten ample experience with flexbox, the box-model, absolute and relative positioning, and a variety of ways JS can interact with CSS classes.  I started working with grid in this version as well.

# version 2 - CSS, Markdown
### 6.25.2022
I changed the content files to Markdown instead of HTML.  The `markdown-loader` for Webpack converts them anyway, and it's much easier to type content in .md than HTML.  I cleaned up the README.md file as well to better reflect the "delete and start over" process.

The biggest change in this version is my approach to styling.  I must have watched and read hours of CSS tutorials to cobble together a better process, especially the tutorials on [Kevin Powell's Youtube channel](https://www.youtube.com/kepowob).  Starting my stylesheet with custom CSS properties for overall site-design, integrating a CSS reset for cross-browser compatibility, and developing really clear responsive and mobile-first principles has been a priority.

# version 1 - Webpack
### 6.17.2022
The initial version of this page is just a three-section layout with some icons at the bottom.  The first section, Home, describes the basic intent of the page.  This is the second section, History, which will detail the progress from iteration to iteration.  The third section, Process, records the steps I take to create the site from the ground up each time.  It's basically a tutorial I made for myself to practice the same coding 'song' over and over.

There are currently only four icons for the primary tools I'm using: HTML5, CSS3, Javascript, and Webpack - not counting Git, Vercel, VSCode, and Illustrator, which I'll likely include next.  Additional icons for Markdown, Blender, other Adobe Suite programs, Three.js, React, et cetera will be added in future versions of the site.