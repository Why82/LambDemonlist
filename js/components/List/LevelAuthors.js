```js id="k9zq4m"
export default {
    props: {
        author: {
            type: String,
            required: true,
        },
        creators: {
            type: Array,
            default: () => [],
        },
        verifier: {
            type: String,
            required: true,
        },
    },

    computed: {
        selfVerified() {
            return this.author === this.verifier && (!this.creators || this.creators.length === 0);
        },
    },

    template: '<div class="level-authors">' +
        '<div class="type-title-sm">Creator</div>' +
        '<p class="type-body"><span>{{ author }}</span></p>' +
        '<div class="type-title-sm">Verifier</div>' +
        '<p class="type-body"><span>{{ verifier }}</span></p>' +
        '<div class="type-title-sm">Publisher</div>' +
        '<p class="type-body"><span>{{ author }}</span></p>' +
        '</div>',
};
```
