<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new order</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            solo
            name="title"
            label="Order title"
            type="text"
            required
            :rules="[(v) => !!v || 'Title is required']"
            v-model="title"
          ></v-text-field>
          <v-textarea
            solo
            name="description"
            label="Order description"
            :rules="[(v) => !!v || 'Description is required']"
            v-model="description"
          ></v-textarea>
        </v-form>
        <v-layout row wrap>
          <v-flex xs12>
            <v-btn color="#B57EDC" class="ma-2 white--text">
              Upload
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <img src="" alt="" height="150" />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-switch
              class="ml-2"
              v-model="promo"
              label="Add to promo?"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="ml-2"
              :loading="loading"
              :disabled="!valid"
              color="success"
              @click="createOrder"
              >Create order</v-btn
            >
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    createOrder() {
      if (this.$refs.form.validate()) {
        const order = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc:
            "https://static.1000.menu/img/content/24111/zapechennye-rolly-s-kopchennoi-kuricei_1511525655_1_max.jpg",
        };

        this.$store.dispatch("createOrder", order)
          .then(() => {
            this.$router.push("/list");
          })
          .catch()
      }
    },
  },
};
</script>

<style>
</style>