query getUsers {
  users {
    id
    name
    expenses_aggregate {
      aggregate {
        sum {
          amount
        }
        max {
          amount
        }
        min {
          amount
        }
      }
    }
  }
  expenses {
    id
    notes
    amount
    created_at
    user {
      name
      id
    }
  }
}

mutation addUser {
  insert_users_one(object: {name: "antonio"}) {
    id
    name
  }
}

mutation deleteUser {
  delete_users_by_pk(id: 1) {
    id
    name
  }
}

Fetch data from users

headers:
```
x-hasura-admin-secret hasura

```
