Vue.component('player-hands', {
  props: ['cards'],
  template: '<div>プレイヤー<li v-for="card in cards">{{card.number}}{{card.suit}}</li></div>'
})
Vue.component('dealer-hands', {
  props: ['cards'],
  template: '<div>ディーラー<li v-for="card in cards">{{card.number}}{{card.suit}}</li></div>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'ディラー「勝負しましょ」',
    player: {
      name: 'あなた',
      totalValue: 0,
      hand: new Array
    },
    dealer: {
      name: 'ディーラー',
      totalValue: 0,
      hand: new Array
    },
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
  mounted: function () {
    this.dealerDraw();
  },
  methods: {
    draw: function (user) {
      user
        .hand
        .push(this.deck[Math.floor(Math.random() * this.deck.length)]);
      for (var value of user.hand) { // オブジェクトの中のプロパティ名を取り出す。
        user.totalValue += value.number;
      }
    },
    judge: function (user) {
      if (user.totalValue > 21) {
        if (user.name == 'ディーラー') {
          this.message = 'はいディラーの負け'
        } else {
          this.message = 'はい' + user.name + 'の負け'
        }
      }
    },
    playerDraw: function () {
      this.draw(this.player);
      this.judge(this.player);
    },
    dealerDraw: function () {
      this.draw(this.dealer);
      this.judge(this.dealer);
    },
    battle: function () {}
  }
})