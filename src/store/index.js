import { createStore } from 'vuex'

export default createStore({
  state: {
    projects:null,
    testimonials:null,
    education:null,
    skills:null,
    workExp:null
  },
  
  mutations: {
    setTestimonials(state, value){
      state.testimonials=value
    },
    setEducation(state, value){
      state.education=value
    },
    setSkills(state, value){
      state.skills=value
    },
    setWorkExp(state, value){
      state.workExp=value
    },
    setProjects(state, value){
      state.projects=value
    }
  },
  actions: {
   async fetchData(context){
      const response=await fetch('https://ntandonokilana.github.io/datavue/')
      const data=await response.json()
      console.log(data.data[0].projects);
      context.commit("setTestimonials",data.data[1].testimonials)
      let [education, skills, workExp]= data.data[2].resume
      context.commit("setEducation",education.education)
      context.commit("setSkills",skills.skills)
      context.commit("setWorkExp",workExp.workExp)
      context.commit('setProjects',data.data[0].projects)
    }
  },
 
})

// Use asynchronous functions