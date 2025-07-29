# Dean Rutter's Portfolio Site

## Hosting
This website is hosted right here on GitHub! The node project automatically builds and deploys to 
GitHub Pages directly from the master branch whenever there is a new commit.
Pages is configured to work with my home domain (orbonis.co.uk) and generate an SSL via Let's Encrypt.
This allows it to be found at https://www.orbonis.co.uk/ and https://orbonis.co.uk/

## Construction
The site is constructed with React, with a focus on Flex CSS and reusable code. Instead of using an 
existing framework I decided to create my own. While a little over-engineered for a simple portfolio, it 
demonstrates how I typically like to keep my code structured and maintained when working with frameworks 
and shared code bases.

## Features
- A main page about me. I definitely spent more time working on it that you will reading it.
- A timeline of my notable employment history and education. Each section can be expanded to see more
detailed information, including highlighted skills & tech. You can do a PDF export! 
- A list of example projects to show off my code. Probably how you ended up here. Links to code are
provided, along side specific skill highlights.
- A table of my skill and any tech I am familiar with. I gave a vague star rating to you can get an idea
of my recent usage and familiarity of each item.

## Building
The project uses a Node environment and uses webpack to generate the final static website. 
### Commands
```
npm run build
```
This command builds the final static site using the provided webpack config, overriding the mode for production. 
Can be run manually, but is primarily used by GitHub Actions workflow to produce the build.

```
npm start
```
Builds the site, deploys it to a local dev server, and monitors the codebase for changes.
