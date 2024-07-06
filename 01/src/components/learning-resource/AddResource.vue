<template>
  <base-dialog v-if="inputIsInvalid" title="Input is invalid">
    <template #default>
      <p>Unforturnately , you are gay and stupid, complate the inputs</p>
    </template>
    <template #actions>
      <base-button @click="closeDialog">Confirm</base-button>
    </template>
  </base-dialog>
  <base-card>
    <template v-slot:card>
      <form @submit.prevent="addResourcesToData">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" ref="title" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            ref="description"
          />
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" name="link" type="url" ref="link" />
        </div>
        <div class="form-control">
          <base-button type="submit">Add Resources</base-button>
        </div>
      </form>
    </template>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      inputIsInvalid: null,
    };
  },
  inject: ["addResource"],
  methods: {
    addResourcesToData() {
      const titleValue = this.$refs.title.value;
      const descriptionValue = this.$refs.description.value;
      const linkValue = this.$refs.link.value;
      if (
        titleValue.trim() == "" ||
        descriptionValue.trim() == "" ||
        link.trim() == ""
      ) {
        this.inputIsInvalid = true;
        console.log("erorr");
        return;
      }
      this.addResource(titleValue, descriptionValue, linkValue);
    },
    closeDialog() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
