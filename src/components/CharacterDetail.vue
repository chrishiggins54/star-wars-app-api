<template>
  <div class="character-details-container">
    <div class="character-details" v-if="character.id">
      <img :src="`/img/${character.id}.jpg`" alt="Character Image"/>
      <div class="character-info">
        <h2>{{ character.name }}</h2>
        <p><strong>Gender:</strong> &nbsp;&nbsp;{{ character.gender }}</p>
        <p><strong>Birth Year:</strong> &nbsp;&nbsp;{{ character.birth_year }}</p>
        <p><strong>Height:</strong> &nbsp;&nbsp;{{ character.height }}cm</p>
        <p><strong>Weight:</strong> &nbsp;&nbsp;{{ character.mass }}kg</p>
        <p><strong>Hair Color:</strong> &nbsp;&nbsp;{{ character.hair_color }}</p>
        <p><strong>Skin Color:</strong> &nbsp;&nbsp;{{ character.skin_color }}</p>
        <p><strong>Eye Color:</strong> &nbsp;&nbsp;{{ character.eye_color }}</p>
      </div>
    </div>
    <div v-else>
      Loading character details...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      character: {}
    };
  },
  async mounted() {
    await this.getCharacterDetails();
  },
  methods: {
    async getCharacterDetails() {
  const characterId = this.$route.params.id;
  try {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/starwars/${characterId}`);
    this.character = { id: characterId, ...response.data };
  } catch (error) {
    console.error(error);
  }
}

  }
};
</script>

<style>
.character-details-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  height: 100vh;
  overflow: hidden;
}

.character-details {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.character-details img {
  max-width: 100%;
  max-height: 450px; 
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 10px;
}

.character-details h2, .character-details p {
  color: #FFE81F;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px black;
  text-align: left;
  width: 100%;
}

.character-details h2 {
  font-size: 2em;
  margin-bottom: 15px;
}

@media (max-width: 600px) {
  .character-details {
    padding: 15px;
  }
  .character-details img {
    max-height: 200px;
  }
}
</style>