'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion'
  }
]

module.exports = {
  getCourses: () => {
    return courses
  }
}
