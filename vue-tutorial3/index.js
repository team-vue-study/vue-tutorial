
var app = new Vue({
  el: '#app',
  data: {
    a: 'test'
  },
  created: function() {
    console.log('a is... ' + this.a)
  }
})