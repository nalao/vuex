<template>
    <div>
        My Component
        <button type="button" @click="up()">increment</button>
        <button type="button" @click="down()">deincrement</button>
    </div>
</template>

<script>

export default {
    name: "mycomponent",
    methods: {
        up(){
            this.$store.dispatch('increment')
        },
        down(){
            this.$store.dispatch('deincrement')
        },
        // ...mapActions([
        // 'increment',
        // 'deincrement'
        // ])
    }
}
</script>