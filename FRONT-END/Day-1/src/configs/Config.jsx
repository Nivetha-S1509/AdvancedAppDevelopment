//Configs will be replaced by Admin (Backend Data)

const ContactConfig = {
  email: "partypro@gmail.com",
  phone: 8072981835,
  address: "Adyar Sea Face, MRC Nagar, Annamalai Puram, Chennai - 600028"
}
const MembershipPlans = [
  {
    pid: 1,
    planname: 'Free',
    price: 0,
    days: 30
  },
  {
    pid: 2,
    planname: '6 Months',
    price: 600,
    days: 180
  },
  {
    pid: 3,
    planname: 'Annual',
    price: 1000,
    days: 360
  },
]
const questions = [
  {
    qid: 1,
    title: 'question',
    option1: 'option a',
    option2: 'option b',
    option3: 'option c',
    correctoption: 'option1'
  },
  {
    qid: 2,
    title: 'question2',
    option1: 'option m',
    option2: 'option n',
    option3: 'option o',
    correctoption: 'option2'
  },
  {
    qid: 3,
    title: 'question3',
    option1: 'option x',
    option2: 'option y',
    option3: 'option z',
    correctoption: 'option3'
  }
];

const razorpayconfig = {
  key: 'rzp_test_3T6byTDHuVQpX5',
  key_secret: 'aQsOHNPDTZRxvAnruOCVupUp',
  currency: "INR",
  name: 'iamneo',
}

const testuserconfig = {
  name: 'max',
  email: 'max.neo.dev@gmail.com',
  contact: 9876543210
}


export { ContactConfig, MembershipPlans, questions, razorpayconfig, testuserconfig }