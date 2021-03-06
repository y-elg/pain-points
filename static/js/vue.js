Vue.component('post', {
    props: ['person', 'idea', 'likes'],
    template: '<div class="post-wrapper"><div>{{ person }} thinks {{ idea }}<br>Likes: {{ likes }}</div></div>'
})

Vue.component('comment', {
    props: ['user', 'message'],
    template: '<div>{{ user }}: {{ message }}</div>'
})

var app = new Vue({
    el: '#app',
    data: {
        classObject: {

        },
        users: [
            {
                cl: "post-wrapper",
                name: "Shaina",
                likes: 0,
                idea: "thing",
                commentlist: [
                    {user: 'comm', message:'idk'},
                    {user: 'comm2', message:'idk as well'}
                ]
            },
            {
                name: "Shakil",
                likes: 0,
                idea: "thing2",
                commentlist: [
                    {user: 'comm3', message:'idk and'},
                    {user: 'comm4', message:'idk or'}
                ]
            }
        ],
    },
    methods: {
      addlike: function(user) {
          user.likes+=1;
      }
    }
})
