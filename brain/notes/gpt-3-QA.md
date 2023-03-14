---
title: Using LLMs like GPT-3 to make QA bots
tags: programming
---

## Using LLMs like GPT-3 to make QA bots


- GPT-3 can be used to tailor an answer based on context by supplying the context along with prompt.
- For training GPT-3 on documentation, the context to be supplied is too large to fit in a single prompt.
- So we have to find the relevant documentation section/chunk from the query and embed only that to the prompt. How —>
- Split the documents into sections
- Create an embedding vector for each section.
- An embedding is a vector of numbers that helps us understand how semantically similar or different the texts are. The closer two embeddings are to each other, the more similar are their contents.
- Word embeddings
- How do you vectorially represent a word to a neural network such that two similar vectors are two similar words ?  
- https://youtu.be/gQddtTdmG_8
- Insight : https://youtu.be/gQddtTdmG_8?t=583
-	On receiving a query, embed the query and get its vector representation. Use this to perform a similarity search in the vector space generated earlier and get the relevant contexts.
- Prepend the relevant context embeddings to the prompt
- The splitting, embedding and matching part can be abstracted away using Langchain JS.

- Word2Vec
	https://jalammar.github.io/illustrated-word2vec/

