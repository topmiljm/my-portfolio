Document:

Why we created projects.js
What data belongs in the project object
How .map() works
Why React requires key
What a data-driven component means
Why separating data from presentation is useful

I'd particularly make sure you understand this:

projects.map((project) => (
  <article key={project.id}>
    ...
  </article>
))

If you understand that pattern well, you've learned a fundamental React skill.