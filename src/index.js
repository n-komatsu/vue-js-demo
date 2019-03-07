import Vue from 'vue';
import filters from './utils/visibilityFilters';
import MyApp from 'Components/App';

const app = new Vue({
  el: '#app',
  data() {
    return {
      visibility: 'all',
    }
  },
  components: {
    //importしたオブジェクトを渡す
    //es2015のオブジェクトのショートハンド記法、キーを書かないで記述すると、
    //MyApp: MyAppというキーバリューとして認識される。
    //マウント時に下記のキーはケバブケースに変換される。
    MyApp
  },
  //置き換えるカスタムタグの指定。
  template: '<my-app :visibility="visibility"></my-app>',
});

function onHashChange() {
  const visibility = window.location.hash.replace(/#\/?/, '');
  if(filters[visibility]) {
    app.visibility = visibility;
  } else {
    window.location.hash = '';
    app.visibility = 'all';
  }
}

window.addEventListener('hashchange', onHashChange);
onHashChange();

app.$mount();