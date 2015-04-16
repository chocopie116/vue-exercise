# exercise
vue.js SPA

# sepecifications
single page application.
output compiled some javascript files(for some entry points)

# 試すこと

* データバインディングってどう？
    * 簡単.
* ページの遷移
    * v-showを使って、display:noneでやっている.
* single page applicationのroutingについて
    * vueにまかせても全部できる [vue-js.Routing](http://vuejs.org/guide/application.html#Routing)
    * routingライブラリを使っている
        * メリット・デメリットあんまわかっていないので調査する
* ページ切り替えのアニメーションって自分で実装できる？
    * 未検証
* ポップアップとか簡単？
    * [サンプル](http://www.tejitak.com/blog/?p=821)はある。そういうcomponentを書けばできそう。
* ブラウザの戻る押した時ってどう？
    * http://example.com/#homeとかのhashURLなら勝手にヒストリになる
    * http://example.com/homeとかだと、aタグのイベントをひっかけて、preventDefault()等をする必要があるが十分可能。
* 複数のconcatファイルって出せる？(SPAのエントリポイント複数持てるように念のため検証)
    * 複数出す必要ないかな。出す必要あればgulpの中でbrowserifyでtask記述すればよい
* css jsのcompileとかどうする？
    * 1.gulpでsassで、browserifyを使うのが一番硬い感じがする
    * 2.vueifyを使って、<style><template><script>をweb componentsライクに書くことも可能
        * 1でいいかな感
* テストとかってかける？
    * VMの中で、何かの操作をしたときに、vm.$dataについてアサーションをする感じ。[リンク](http://vuejs.org/guide/application.html#Unit_Testing)

# まとめること
* タイピング量どう？
    * まぁ普通
* デザイナーさんとの分業って大丈夫？
    * 先にエンジニアがフロントエンドの遷移をつくる必要がある(mock APIをたたいて、viewにbindingするところまで)
* 設計複雑になりそうなところは？
    * MVVMのVMの中で、イベントが発生することを考えると、ロジックがVM(vue)のインスタンスの中でごちゃごちゃしそう
        * [hacker news clone](https://github.com/yyx990803/vue-hackernews)をみておくとよさそう

# install

```
$ npm install
```

compile js
```
$ make watch-and-compile
```
