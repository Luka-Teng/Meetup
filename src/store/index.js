import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505478282424&di=df32488b494839f4cb6a3c45bbdde4dd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D7ffa26dc33dbb6fd3156ed65614dc16d%2F5366d0160924ab18b90b73103ffae6cd7b890bf3.jpg',
        id: '1',
        title: 'Great Wall',
        date: '2017-09-01'
      },
      {
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505478401129&di=18d7b284fd3424fef03bda23248719d7&imgtype=0&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2015-12-16%2F34f7357e-e981-49f9-963b-c332357ef17d.jpg',
        id: '2',
        title: 'Shanghai',
        date: '2017-09-02'
      },
      {
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506073480&di=1ee07192b1f127960aa5967ba89c2db2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F89%2F42%2F50B58PICbPR_1024.jpg',
        id: '3',
        title: 'Guangzhou',
        date: '2017-09-03'
      }
    ],
    user: {
      id: 'luka1',
      registerdMeetups: ['1']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        locations: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "sdsdasdasd"
      }
      // firebase is necessary
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
