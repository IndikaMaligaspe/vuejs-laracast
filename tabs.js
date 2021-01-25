Vue.component('bulma-tabs',{
    template: `
        <div>    
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" v-bind:class="{'is-active': tab.isActive }"> 
                        <a v-bind:href="tab.href" @click="selectTab(tab)"> {{ tab.name }} </a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
       return {
           tabs: [],
       };
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            });
        }
    },

    created() {
        this.tabs = this.$children
    }
});

Vue.component('tab', {
    template:`
        <div v-show="isActive"><slot></slot></div>  
    `,

    props: {
        name: { required: true }, 
        selected: {default: false}
    },

    computed: {
      href () {
         return '#' + this.name.toLowerCase().replace(/ /g,'-');
      } 
    },

    data() {
        return {
            isActive: false
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root'
});