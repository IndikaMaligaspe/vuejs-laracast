Vue.component('bulma-message',{
    props: ['title','body'],
    
    data () {
      return {
          showMe: true
      }
    },

    template: `
     <article class="message">
        <div class="message-header" >
            <p>{{title}}</p>
            <button class="delete" aria-label="delete" @click='showMe = false'></button>
        </div>
        <div class="message-body" v-show="showMe">
            {{body}}
        </div>
    </article>
    `,
});

new Vue({
 el: '#root'
})