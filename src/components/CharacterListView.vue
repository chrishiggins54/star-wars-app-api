<template>
  <div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search characters" />
      <button @click="searchCharacters">Search</button>
    </div>

    <div class="character-container">
      <div class="character-card" v-for="character in localCharacters" :key="character.url"
        @click="goToCharacterDetail(character)">
        <h3>{{ character.name }}</h3>
        <p><strong>Birth Year:</strong> {{ character.birth_year }}</p>
        <p><strong>Height:</strong> {{ character.height }}cm</p>
        <p><strong>Weight:</strong> {{ character.mass }}kg</p>
      </div>
    </div>

    <button v-if="nextPage" @click="getNextPage" class="button-load-more">Load More</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      localCharacters: [],
      nextPage: null
    };
  },
  methods: {
    getCharacters() {
    axios.get(`${process.env.VUE_APP_API_URL}/starwars`)
      .then(response => {
        this.localCharacters = response.data.results;
        this.nextPage = response.data.next;
      })
      .catch(error => {
        console.error(error);
      });
  },
    getNextPage() {
      if (this.nextPage) {
        axios.get(this.nextPage)
          .then(response => {
            this.localCharacters = this.localCharacters.concat(response.data.results);
            this.nextPage = response.data.next;
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    goToCharacterDetail(character) {
      let characterId = character.url.match(/\/api\/people\/(\d+)/)[1];
      this.$router.push({ path: `/characters/${characterId}` });
    },
    searchCharacters() {
      if (this.searchQuery.trim() === '') {
        this.localCharacters = []; 
        return;
      }

      const url = `${process.env.VUE_APP_API_URL}/starwars/search?name=${encodeURIComponent(this.searchQuery)}`;
    axios.get(url)
        .then(response => {
          this.localCharacters = response.data.results;
          this.nextPage = response.data.next;
        })
        .catch(error => {
          console.error("Error during search:", error);
        });
    }
  },
  mounted() {
    this.getCharacters();
  }
};
</script>


<style scoped>
.search-bar {
  text-align: center;
  margin-bottom: 30px;
}

.search-bar input {
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-bar input:focus {
  border-color: #0056b3;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #0056b3;
}

.character-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.character-card {
  background-color: #FFF;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 275px;
  height: 175px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.character-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.character-card h3 {
  color: #333;
  font-size: 1.4em;
  margin-bottom: 15px;
}

.character-card p {
  color: #555;
  margin: 5px 0;
  line-height: 1.4;
}

.button-load-more {
  display: block;
  margin: 30px auto;
  padding: 12px 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-load-more:hover {
  background-color: #0056b3;
}

</style>

