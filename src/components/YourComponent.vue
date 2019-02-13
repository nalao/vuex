<template>
    <div>
        Your Component {{ count }}
    </div>
</template>
<script>

export default {
    computed:{
        // ...mapGetters([
        //     'getCounter'
        // ]),

        count(){
            // console.log(this.$store.getters.getCounter)
            return this.$store.state.counter.count
        }
    },
}
</script>