---
title: Apollo
---

`typed-graphql-builder` can easily be used with Apollo Client by substituting the `gql` function
that comes with it. Instead of using `gql` and passing it a query string:

```typescript
const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`
```

we can use `typed-graphql-builder`:

```typescript
import { mutation } from "./generated-api"

const ADD_TODO = mutation(m => [
  m.addTodo({ type: $("type") }, todo => [
    //
    todo.id,
    todo.type,
  ]),
])
```

The type of the variable will be automatically inferred as `string` for us.

The mutation can then be used in a component as usual. We can pass additional variables at the
point of use:

```typescript
function AddTodo() {
  const [todo, setTodo] = useState("")
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO)

  if (loading) return "Submitting..."
  if (error) return `Submission error! ${error.message}`

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo({ variables: { type: todo } })
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
