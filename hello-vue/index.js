var app5 = new Vue({
  el: '#app-5',
  data: {
    list: [...Array(100).keys()].map(i => ++i)
  }
})