Vue.component('player-hands', {
  props: ['cards'],
  template: '<div>プレイヤー<li v-for="card in cards">{{card.symbolNumber}}{{card.suit}}</li></div' +
      '>'
})
Vue.component('dealer-hands', {
  props: ['cards'],
  template: '<div>ディーラー<li v-for="card in cards">{{card.symbolNumber}}{{card.suit}}</li></div' +
      '>'
})

var app = new Vue({
  el: '#app',
  data: {
    suits: [
      "♠", "♦", "♣", "♥"
    ],
    numbers: [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ],
    values: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      10,
      10,
      10
    ],
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
    deck: []
  },
  mounted: function () {
    this.makeDeck();
    this.dealerDraw();
  },
  methods: {
    makeDeck: function () {
      for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < values.length; x++) {
          var card = {
            symbolNumber: this.numbers[x],
            value: this.values[x],
            suit: this.suits[i]
          };
          this
            .deck
            .push(card);
        }
      }
    },
    draw: function (user) {
      user
        .hand
        .push(this.deck[Math.floor(Math.random() * this.deck.length)]);
      for (var card of user.hand) { // オブジェクトの中のプロパティ名を取り出す。
        user.totalValue += card.value;
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
    stand: function () {
      while (this.dealer.totalValue < 17 && this.dealer.totalValue < this.player.totalValue) {
        this.dealerDraw();
      }
      if (this.dealer.totalValue > this.player.totalValue) {
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