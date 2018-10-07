var app = new Vue({
  el: '#app',
  data: {
    text: 'test'
  },
  methods: {
    doSomething: function(){
      this.text = 'Something!!'
    }
  },
  created: function() {
    console.log('a is... ' + this.a)
  }
})