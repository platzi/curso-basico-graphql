# Queries ejecutadas en el curso en GraphiQL

## Alias y Fragments

```graphql
{
  AllCourses: getCourses{
    ...CourseFields
  }

  Course1: getCourse(id: "5cb4b8ce75f954a0585f7be2"){
    ...CourseFields
    teacher
  }

  Course2: getCourse(id: "5cb4b8ce75f954a0585f7be4"){
    ...CourseFields
    topic
  }
}

fragment CourseFields on Course {
  _id
  title
  description
  people {
    _id
    name
  }
}
```

## Variables

```graphql
query GetCourse2 ($course: ID!) {
  getCourse(id: $course){
   _id
    title
    people{
      _id
      name
    }
  }
}
```

Requiere un objeto JSON como:

```json
{
  "course": "5cb4b8ce75f954a0585f7be3"
}
```

## Interfaces

```graphql
{
  getPeople{
    _id
    name
    email
    ... on Monitor {
      phone
    }
    ... on Student {
      avatar
    }
  }
}
```

## Directivas

```graphql
query getPeopleData($monitor: Boolean!, $avatar: Boolean!){
  getPeople{
    _id
    name
    ... on Monitor @include(if: $monitor) {
      phone
    }
    ... on Student @include(if: $avatar) {
      avatar
      email
    }
  }
}
```

Requiere un objeto JSON como:

```json
{
  "monitor": false,
  "avatar": true
}
```

## Unions

```graphql
{
  searchItems(keyword: "1"){
    __typename
    ... on Course {
      title
      description
    }
    ... on Monitor {
      name
      phone
    }
    ... on Student {
      name
      email
    }
  }
}
```
