Vue.component('task',{
  template: `<li>
            <slot></slot>   
            </li>`
});

Vue.component('task-list',{
    template: `
        <div>
            <task v-for='task in tasks'>{{task.description}}</task>
        </div>`,

        data () {
           return {
               tasks: [
                    { description: 'Go to the store', completed: true },
                    { description: 'Finish screenshot', completed: false },
                    { description: 'Make donation', completed: false },
                    { description: 'Make Dinner', completed: false },
                    { description: 'Clean room', completed: true },
                ]
            }
        }
})
new Vue({
    el: '#root'
})