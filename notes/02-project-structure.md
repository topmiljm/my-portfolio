package.json

Think of this as the project's control center.

It tells Node:

what the project is called
which packages it depends on
which scripts can be run
project metadata

Example:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

Whenever you type:

npm run dev

Node looks here to determine which command to execute.

package-lock.json

This locks the exact versions of every dependency that gets installed.

Without it, two developers could install slightly different versions of the same package and get different results.

We don't edit this file manually.

node_modules/

This contains all the downloaded packages your project depends on.

It can be thousands of files.

We never edit it directly.

If it's deleted, you simply run:

npm install

to recreate it.

.gitignore

This tells Git which files and folders not to track.

Common examples include:

node_modules/
dist/
.env
index.html

In a traditional website, this would contain all of your HTML.

With React, it's mostly a shell that loads your application.

Eventually, React takes over the content inside the root element.

main.jsx

This is the true entry point of your application.

It tells React:

"Render the App component inside the HTML element with the ID root."

createRoot(document.getElementById('root')).render(
  <App />
);

Every React app starts here.

App.jsx

Think of this as the top-level component of your application.

Eventually it might look something like:

<App>

  <Navbar />

  <Hero />

  <About />

  <Projects />

  <Contact />

  <Footer />

</App>

Every other component will ultimately be rendered inside App.

App.css

We'll use this for styles that apply specifically to the App component.

As the project grows, we'll create additional CSS files for individual components to keep things organized.

index.css

This is where we'll define styles that apply across the entire site, such as:

CSS reset
CSS variables
global typography
body styles
reusable utility classes
vite.config.js

This is Vite's configuration file.

For a simple portfolio, we may never need to change it, but it's where you'd customize Vite's behavior if needed.

public/

Anything placed here is served as-is.

Good candidates include:

favicon
résumé PDF
downloadable files
static images that don't need processing