---
title: urql
---

> [urql](https://formidable.com/open-source/urql/docs/) is a highly customizable and versatile GraphQL client with which you add on features like normalized caching as you grow. It's built to be both easy to use for newcomers to GraphQL, and extensible, to grow to support dynamic single-app applications and highly customized GraphQL infrastructure. In short, `urql` prioritizes usability and adaptability.

`typed-graphql-builder` works with urql's bindings in addition to the core node.js architecture. Anywhere you might have used a GraphQL string or `DocumentNode` object, you can easily
replace these with the generated objects from `typed-graphql-builder`

**Before:**

```ts
const GET_TODOS = `
  query GetTodos {
    todos {
      id
      type
    }
  }
`

const ADD_TODO = `
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`
```

**After `typed-graphql-builder`:**

```ts
import { query, mutation } from "./generated-api"

const GET_TODOS = query(q => [
  q.todos(todo => [
    // ...
    todo.id,
    todo.type,
  ]),
])

const ADD_TODO = mutation(m => [
  m.addTodo({ type: $("type") }, todo => [
    // ...
    todo.id,
    todo.type,
  ]),
])
```

The type of the variable `$("type")` will be automatically inferred as `string` for us. We can then pass these query and mutation objects into urql directly:

```tsx
function ComponentWithTodos() {
  const [{ data }] = useQuery({
    query: GET_TODOS,
  })
}

function AddTodo() {
  const [todo, setTodo] = useState("")
  const [{ fetching, error }, addTodo] = useMutation(ADD_TODO)

  if (fetching) return "Submitting..."
  if (error) return `Submission error! ${error.message}`

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          void addTodo({ type: todo })
          setTodo("")
        }}
      >
        <input value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
```
