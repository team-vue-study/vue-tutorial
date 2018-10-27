Vue.component('trump', {
  props: ['cards'],
  template: '<div><li v-for="card in cards">{{card.number}}{{card.suit}}</li></div>'
})

var app = new Vue({
  el: '#app',
  data: {
    hand: [],
    totalValue: 0,
    deck: [
      {
        number: 1,
        suit: '♥'
      }, {
        number: 2,
        suit: '♠'
      }, {
        number: 3,
        suit: '♦'
      }
    ]
  },
  methods: {
    draw: function () {
      this
        .hand
        .push(this.deck[Math.floor(Math.random() * this.deck.length)]);
    },
    count: function () {
      for(var value of this.hand) { // オブジェクトの中のプロパティ名を取り出す。
        this.totalValue += value.number;
      }
    }

  }
})