import Vue from 'vue';

import MyApp from 'Components/App';

new Vue({
  el: '#app',
  //importしたオブジェクトを渡す
  components: {
    //es2015のオブジェクトのショートハンド記法、キーを書かないで記述すると、
    //MyApp: MyAppというキーバリューとして認識される。
    //マウント時に下記のキーはケバブケースに変換される。
    MyApp
  },
  //置き換えるカスタムタグの指定。
  template: '<my-app></my-app>',
});