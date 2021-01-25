window.Event = new Vue();

Vue.component('coupon',{
   template: `
     <div>
        <input type='text' placeholder='Enter coupon number' v-model="message"/>
        <button name='btnCoupon' v-on:click="couponApplied">Check Validity</button>
        <coupon-message title="Apply Coupon" body="Coupon Applied"></coupon-message>
     </div>
   `,
   data () {
     return {
         message: ''
     }
   },
   methods: {
       couponApplied() {
        Event.$emit('applied', this.message);
       }
   }
});

Vue.component('coupon-message', {
    props: ['title','body'],
    data () {
      return {
          showMe: false
      }
    },

    template: `
     <article class="message" v-show="showMe">
        <div class="message-header" >
            <p>{{title}}</p>
            <button class="delete" aria-label="delete" @click='showMe = false'></button>
        </div>
        <div class="message-body">
            {{bodyMessage}}
        </div>
    </article>
    `,
    data () {
        return {
            bodyMessage: '',
            showMe: false
        }
    },
    
    mouted () {
        this.bodyMessage = body;
    },

    created() {
      Event.$on('applied', (message)=> {
          this.showMe=true
          this.bodyMessage = message
      })
    }
})

new Vue({
    el: '#root'
})