<template>
  
  <base-card>
    <template v-slot:card>
      <base-button
        @click="switchTab('stored-resources')"
        :mode="selctedTab === 'stored-resources' ? null : 'flat'"
        >The Resource</base-button
      >
      <base-button
        @click="switchTab('add-resource')"
        :mode="selctedTab === 'add-resource' ? null : 'flat'"
        >Add Resource</base-button
      >
    </template>
  </base-card>
  <component :is="selctedTab"></component>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    AddResource,
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
      selctedTab: "stored-resources",
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    switchTab(tab) {
      this.selctedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        description,
        title,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selctedTab = "stored-resources";
    },
    deleteResource(resId){
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1)
    }    
  },
};
</script>
