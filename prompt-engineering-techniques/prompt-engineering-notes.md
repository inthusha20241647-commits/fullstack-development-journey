
# Prompt Engineering Techniques

A beginner-friendly collection of prompt engineering techniques with simple explanations and practical examples.

**Weak prompt:** Vague instructions that leave the AI to guess.

**Strong prompt:** Clear and specific instructions that define the role, task, details, format, and constraints.

## Table of Contents

1. [Direct Prompting](#1-direct-prompting)
2. [Zero-Shot vs Few-Shot](#2-zero-shot-vs-few-shot)
3. [Chain of Thought](#3-chain-of-thought)
4. [Instruction Prompting](#4-instruction-prompting-high-control)
5. [ReAct (Reason + Act)](#5-react-reason--act)
6. [Tree of Thoughts](#6-tree-of-thoughts)
7. [Directional Stimulus](#7-directional-stimulus)
8. [Iterative Prompting](#8-iterative-prompting)
9. [Data Extraction](#9-data-extraction)
10. [Error Correction](#10-error-correction)
11. [RAG (Retrieval-Augmented Generation)](#11-rag-retrieval-augmented-generation)
12. [Breaking Complex Problems](#12-breaking-complex-problems)
13. [Meta Prompting](#13-meta-prompting)
14. [Perspective Switching](#14-perspective-switching)
15. [Thinking Modes](#15-thinking-modes)
16. [Nested Complexity](#16-nested-complexity)

---

## 1. Direct Prompting

Tell the AI exactly what you want, including the task, details, and output format.

**Example:**

Weak prompt:

```text
List 5 healthy foods.
```

Strong prompt:

```text
Act as a nutrition expert.
Suggest 5 healthy foods for students.
Explain their benefits briefly using simple language.
Present the answer in bullet points.
```

---

## 2. Zero-Shot vs Few-Shot

- **Zero-shot:** Give an instruction without providing examples.
- **Few-shot:** Provide examples to show the AI the expected pattern.

**Example:**

Zero-shot:

```text
Classify this review as positive or negative:

"The product quality is great, but delivery was very slow."
```

Few-shot:

```text
Classify each review as positive or negative.

Example 1:
Input: "Amazing service and fast delivery."
Output: Positive

Example 2:
Input: "Very bad experience."
Output: Negative

Now classify:
Input: "The product is excellent."
Output:
```

---

## 3. Chain of Thought

Ask the AI to solve a problem in logical steps and show the important calculations.

**Example:**

```text
A train travels 60 km in one hour.
Calculate the distance travelled in 5 hours.
Show the calculation and explain the result.
```

---

## 4. Instruction Prompting (High Control)

Set specific rules and constraints to control the response's length, tone, content, and format.

**Example:**

```text
Act as a career coach.
Write a professional email to a recruiter.

Requirements:
- Maximum 120 words
- Confident but polite tone
- Avoid generic phrases
- Use a professional email format
```

---

## 5. ReAct (Reason + Act)

ReAct combines reasoning, actions, and observations. An AI agent can use tools, observe the results, and decide on its next action.

**Example:**

```text
Help me choose a smartphone under ₹20,000.

1. Identify the important features.
2. Search for suitable phones using available search tools.
3. Compare their prices, features, and drawbacks.
4. Recommend the best option based on my needs.
```

---

## 6. Tree of Thoughts

Explore multiple possible approaches to a problem, compare their strengths and weaknesses, and combine the best ideas.

**Example:**

```text
Suggest three strategies for growing a small YouTube channel.

Compare their advantages and disadvantages.
Combine the strongest ideas into one practical plan.
```

---

## 7. Directional Stimulus

Guide the AI to focus on specific topics, keywords, or aspects of a question.

**Example:**

```text
Explain the impact of social media on society.

Focus on:
- Mental health
- Productivity
- Relationships
```

---

## 8. Iterative Prompting

Improve the output gradually by refining the prompt through multiple rounds.

**Example:**

| Step | Prompt |
|---|---|
| Prompt 1 | Write a resume summary. |
| Prompt 2 | Write a resume summary for a beginner web developer. |
| Prompt 3 | Include JavaScript, React, and Node.js skills. Keep it under 50 words. |

---

## 9. Data Extraction

Extract specific information from unstructured text and organize it into a structured format.

**Example:**

```text
Extract the following information from this text:
- Name
- Skills
- Experience

Text:
"Rahul Sharma is a software engineer with 3 years
of experience. He works with JavaScript, React,
and Node.js."

Output: JSON format.
```

---

## 10. Error Correction

Ask the AI to review its response, identify mistakes, and provide a corrected version.

**Example:**

```text
Write a short explanation of the water cycle
for a Class 8 student.

Review your answer for factual and grammatical
errors, then provide the corrected version.
```

---

## 11. RAG (Retrieval-Augmented Generation)

RAG combines retrieved information from documents or external sources with AI-generated responses to provide answers grounded in relevant information.

**Example:**

```text
Based on the college notice below, identify
the last date to pay the examination fee
and explain any late-payment penalties.

Notice:
[Paste the college notice here]
```

---

## 12. Breaking Complex Problems

Divide a large task into smaller, manageable steps to make it easier to plan and complete.

**Example:**

```text
Help a student prepare for exams in one month.

Break the plan into:
- Syllabus planning
- Daily study schedule
- Revision strategy
- Practice tests

Explain each step clearly.
```

---

## 13. Meta Prompting

Use AI to create, evaluate, or improve prompts to make them clearer and more effective.

**Example:**

```text
Improve this prompt to make it clearer,
more specific, and more useful:

"Give me career advice."

Include the target audience, relevant details,
and expected output format.
```

---

## 14. Perspective Switching

Ask the AI to explain the same topic from different viewpoints.

**Example:**

```text
Explain the impact of online education
from three perspectives:
- Student
- Teacher
- Working professional

Highlight the benefits and challenges for each.
```

---

## 15. Thinking Modes

Ask the AI to approach a task using different modes, such as brainstorming, analysis, and teaching.

**Example:**

```text
Suggest five project ideas for a beginner programmer.

First, brainstorm ideas.
Next, compare their advantages and disadvantages.
Finally, explain the best idea in simple language.
```

---

## 16. Nested Complexity

Combine several related tasks into one prompt with clearly defined steps and an organized output.

**Example:**

```text
Plan a three-day trip.

Include:
1. Destination options
2. Daily itinerary
3. Estimated budget
4. Packing checklist
5. Safety tips

Present everything in a structured format.
```

---

## Key Takeaway

Effective prompt engineering involves giving clear instructions, providing relevant context, specifying constraints, and defining the expected output.

Different techniques are useful for different tasks. Combining them can help produce more relevant, structured, and useful AI responses.
