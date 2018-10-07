var vm = new Vue({
  el: '#app',
  data: {
    message: 'HELLO'
  },
  computed: {
    reversedMessage1: function () {
      return this
        .message
        .split('')
        .reverse()
        .join('')
    }
  },
  methods: {
    reversedMessage2: function () {
      return this
        .message
        .split('')
        .reverse()
        .join('')
    }
  }
})