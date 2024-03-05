{
  "data",
      [
          {
              "projects":[
                  {
                      "name":"Abantu Reads",
                      "github":"https://github.com/ntandonokilana/AbantuReads2.git",
                      "vercel":"https://abantu-reads2.vercel.app/"
                  },
                  {
                    "name":"Calculator",
                    "github":"https://github.com/ntandonokilana/Calculator.git",
                    "vercel":"https://calculator-beta-umber.vercel.app/"
                  },
                  {
                    "name":"To-do list",
                    "github":"https://github.com/ntandonokilana/do-to-list.git",
                    "vercel":"https://do-to-list-five.vercel.app/"
                  },
                  {},
                  {},
                  {},
              ]
          },
          {
              "testimonial":[
                  {
                      "name":"Ntando",
                      "description":"",
                      "job":"WebDeveloper"
                  },
                  {}
              ]
          },
          {
              "contact":[]
          },
          {
              "resume":[
                  {
                      "education":[
                          {
                              "name":"Rhodes High School",
                              "year":2017
                          },
                          {
                            "name":"CityVarsity:School of Media & Creative Arts",
                            "course":"Diploma in Film & Television Production Techniques",
                            "year":2019 - 2020
                          },
                          {
                            "name":"Life Choices Coding Academy",
                            "course":"Fullstack Web Development Bootcamp",
                            "year":2023 - 2024
                          }
                      ]
                  },
                  {
                      "skills":[
                          "HTML","CSS","addlinkstoimages", "Bootsrap", "JavaScript", "Vue.js"
                      ]
                  },
                  {
                      "workExp":[
                          {
                              "name":"TooMuchWiFi",
                              "duties":"Customer service & Sales",
                              "year": "2019 6 months"
                          },
                          {
                              "name":"Takealot",
                              "duties":"Customer Service agent",
                              "year": "2020 2 months"
                          },
                          {
                            "name":"Mr D Food",
                            "duties":"Customer Service agent",
                            "year":"2021-2022 1 year, 8 Months"
                          },
                          {
                            "name":"EXL",
                            "duties": "Customer Service Advisor",
                            "year":"2023 8 months"
                          }
                      ]
                  }
              ]
          }
      ]
}

import { createStore } from 'vuex';

const store = createStore({
  state: {
    projects: [],
    testimonials: [],
    contact: [],
    resume: [],
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    setContact(state, contact) {
      state.contact = contact;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
  },
  actions: {
    fetchProjects({ commit }) {
      // Simulating fetching projects from an API
      const projectsData = require('./index.js').data.find(item => item.projects);
      commit('setProjects', projectsData ? projectsData.projects : []);
    },
    fetchTestimonials({ commit }) {
      // Simulating fetching testimonials from an API
      const testimonialsData = require('./index').data.find(item => item.testimonial);
      commit('setTestimonials', testimonialsData ? testimonialsData.testimonial : []);
    },
    // Implement other actions for fetching contact and resume if needed
  },
  getters: {
    projects: state => state.projects,
    testimonials: state => state.testimonials,
    // Implement getters for contact and resume if needed
  },
});

export default store;

