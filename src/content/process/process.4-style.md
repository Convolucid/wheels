## Styling and Images

After rebuilding, merge back into main, then switch back to the version branch to continue adding any features or changes before the next stopping point is reached.

## Styling principles
Not currently working with any pre or post-processors for CSS, but for general organization I like Kevin Powell's method of Display - Positioning - Box Model - Typography - Manipulation/Effects - Miscellaneous.

I'm adapting the [Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/) by Andy Bell and some aspects of the CUBE CSS method for class conventions.  I want to avoid the class-frenzy on each HTML tag that CUBE seems to have.

Avoid fixed sizes for responsiveness - instead you can use min-height and max-width.  Try to use media queries to increase complexity (this means using min-width media queries from a mobile-first perspective).  Media queries can use em and rem, and often you can get away with only one or two breakpoints.  Can use clamp() for responsiveness instead of @media.

## Usage of SVG
Three main methods to add .svg, which will be the bread and butter of my 2D design methods.  `<img>`, `<object>`, and inline.  They have each have their advantages and disadvantages - `<img>` tags allow caching, alt tags, and an easy workflow, but don't allow interactivity through CSS or JS.  `<object>` tags allow caching and interactivity, but load slow and don't allow alt tags.  Inline allows a great deal of interactivity and the fastest loading speed, but no alt tags and is very complicated to work with, requiring close attention to classes and ids.