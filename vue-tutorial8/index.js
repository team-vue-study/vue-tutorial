var watchExampleVM = new Vue({
  el: '#app',
  data: {
    question: '',
    answer:'質問してくれなきゃ答えられるわけないじゃない、バカ！！'
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'タイプをやめるのを待ってるよ'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAncer(),500)
  },
  methods: {
    getAncer: function() {
      if(this.question.indexOf('?') === -1) {
        this.answer = '?マークがない質問なんて受け付けられないわよ！'
        return
      }
      this.answer = '考えとくわ！'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (responce){
          vm.answer = responce.data.answer
        })
        .catch(function (error) {
          vm.answer = error + 'これのせいでAPIたたけないじゃない！！！うるちゃいうるちゃいうるちゃい！！'
        })
    }
  }
})