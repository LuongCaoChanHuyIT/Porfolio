export type MessageSchema = {
  navbar: {
    home: string
    about: string
    projects: string
    contact: string
    namePorfolio: string
  }
  message: {
    welcome: string
  }
  about: {
    title: string
    contentTitle: string
    subcontent: string
  }
  contact: {
    title: string
    subtitle: string
    name: string
    nameRequired: string
    email: string
    emailRequired: string
    emailInvalid: string
    message: string
    messageRequired: string
    success: {
      title: string
      text: string
    }
    error: string
    submit: string
    sentSuccess: string
    sentFail: string
  }
  footer: {
    copyright: string
    privacy: string
    terms: string
    contact: string
  }
  header: {
    badge: string
    subtitle: string
    title: string
    resume: string
    projects: string
  }
  project: {
    title: string
    empty: {
      heading: string
      description: string
    }
    loading: {
      message: string
    }
  }
  resume: {
    title: string
    downloadButton: string
    sections: {
      experience: string
      education: string
      professionalSkills: string
      languages: string
    }
    experiences: {
      period: string
      position: string
      company: string
      location: string
      description: string
    }[]
    educations: {
      period: string
      institution: string
      location: string
      degree: string
      field: string
      description: string
    }[]
    skills: {
      professional: string[]
      programming: string[]
    }
  }
  theme: {
    light: string
    dark: string
  }
}
