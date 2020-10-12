<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My orders</h1>

        <v-card
          class="mb-5 elevation-10"
          v-for="order in myOrders"
          :key="order.id"
        >
          <v-layout row wrap>
            <v-flex xs4>
              <v-card class="ml-3">
                <v-img height="144" :src="order.imageSrc" cover></v-img>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text-primary">{{ order.title }}</h2>
                <p>{{ order.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" class="mr-3" :to="'/order/' + order.id"
                  >Open</v-btn
                >
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myOrders(){
      return this.$store.getters.myOrders
    }
  }
};
</script>

<style>
</style>