Vue.component('todo-item', {
  props:['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    list: [
      {id:0, text:'hogemaru'},
      {id:1, text:'2222hogegohe'},
      {id:2, text:'sakusakusak'}
    ]
  }
})