<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card contain>
                        <v-img height="300" :src="order.imageSrc"></v-img>
                    </v-card>
                    <v-card-text>
                        <h1 class="text-primary">{{order.title}}.</h1>
                        <p>{{order.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange" depressed>Edit</v-btn>
                        <v-btn color="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed:{
        order(){
            const id = this.id
            return this.$store.getters.orderById(id)
        }
    }
}
</script>

<style>

</style>