---
layout: main.njk
---
## Hey, I'm Gautham 👋
Welcome to my digital home :)  
I am an engineering student ‍ from  Kerala, India. I love building things on the web 💻, reading 📚, writing ✍, and traveling 🎒. This is my personal nook in the web where I document my efforts to find myself. Here you can find some of my thoughts, learnings and works.  
_Cheers!_

## Posts

{%- for post in collections.post %}
- [{{ post.data.title}} \[{{post.date.toLocaleDateString("en-US",{ year: 'numeric', month: 'long', day: 'numeric' })}}\]]({{post.url}})
{%- endfor %}



