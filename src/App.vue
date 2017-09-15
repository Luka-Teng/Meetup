<template>
  <v-app light>

    <v-navigation-drawer v-model="sideNav" dark temporary>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          @click=""
          :to="item.link">
          <v-list-tile-action>
              <v-icon dark>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link :to="{ name: 'home'}" tag="span" style="cursor:pointer">Luka-meetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'directions_bike', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Orangize Meetup', link: '/meetup/new'},
          {icon: 'person', title: 'Profiles', link: '/profiles'},
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
      }
    }
  }
</script>
