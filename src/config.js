exports.locale = {
  cn: 'zh',
  en: 'en'
}

exports.host = '/api'
exports.serverurl = '/api'
exports.fetchState = {
  success: 'success'
}

exports.rootPath = {
  allWorks: 'allWorks',
  workDetail: 'allWorks/workDetail'
}

export let titles = {
  bill_to: 'bill_to',
  student: 'student',
  studentDetail: 'studentDetail',
  teacher: 'teacher',
  teacherDetail: 'teacherDetail',
  newTeacher: 'newTeacher',
  company: 'company',
  course: 'course',
  question: 'question',
  courseType: 'courseType'
}
for (let key in titles) {
  titles[key] = `title_${titles[key]}`
}
