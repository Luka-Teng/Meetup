<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="secondary--text">Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name='title'
                label='Title'
                id="title"
                v-model="title"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name='location'
                label='Location'
                id="location"
                v-model="location"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name='imageUrl'
                label='Image URL'
                id="imageUrl"
                v-model="imageUrl"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" width="100%">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name='description'
                label='Description'
                id="description"
                v-model="description"
                multi-line
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12sm6 offset-sm3>
              <v-btn class="primary"
                :disabled="!formIsValid"
                @click.prevent="onCreateMeetup()">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
      }
    },
    methods: {
      ...mapActions({
        createMeetup: 'createMeetup'
      }),
      onCreateMeetup () {
        const meetup = {
          title: this.title,
          locations: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        this.createMeetup(meetup)
      }
    }
  }
</script>
