Vue.component('player-hands', {
  props: ['cards'],
  template: '<div>プレイヤー<li v-for="card in cards">{{card.symbolNumber}}{{card.suit}}</li></div>'
})
Vue.component('dealer-hands', {
  props: ['cards'],
  template: '<div>ディーラー<li v-for="card in cards">{{card.symbolNumber}}{{card.suit}}</li></div>'
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
        symbolNumber: 1,
        number: 1,
        suit: '♥',

      }, {
        symbolNumber: 2,
        number: 2,
        suit: '♠'
      }, {
        symbolNumber: 3,
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
    judgeBurst: function (user) {
      if (user.totalValue > 21) {
        if (user.name == 'ディーラー') {
          this.message = 'はいディラーのバースト'
        } else {
          this.message = 'はい' + user.name + 'のバースト'
        }
      }
    },
    stand: function() {
      while (this.dealer.totalValue < 17 && this.dealer.totalValue < this.player.totalValue) {
        this.dealerDraw();
      }
      if(this.dealer.totalValue > this.player.totalValue) {
        this.message = 'うふふディーラーの勝ちね'
      }
      this.judgeBurst(this.dealer);
    },
    playerDraw: function () {
      this.draw(this.player);
      this.judgeBurst(this.player);
    },
    dealerDraw: function () {
      this.draw(this.dealer);
    }
  }
})