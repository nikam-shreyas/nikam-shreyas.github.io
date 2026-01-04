export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
  credentialId?: string;
  link?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "May 2023",
    skills: ["Prompt Engineering", "Large Language Models (LLM)"]
  },
  {
    title: "How Diffusion Models Work",
    issuer: "DeepLearning.AI",
    date: "May 2023",
    skills: ["PyTorch"]
  },
  {
    title: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI",
    date: "May 2023",
    skills: ["Large Language Models (LLM)", "Langchain"]
  },
  {
    title: "AWS Sagemaker",
    issuer: "Great Learning",
    date: "Apr 2023",
    skills: ["Amazon Web Services (AWS)", "AWS SageMaker"],
    link: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/2390406/original/Shreyas_Nikam20230402-63-1vf5tcg.jpg"
  },
  {
    title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    issuer: "Coursera",
    date: "Jan 2022",
    credentialId: "T2CHSP2JL5XF",
    skills: ["Neural Networks", "Computer Vision", "+4 skills"],
    link: "https://www.coursera.org/account/accomplishments/certificate/T2CHSP2JL5XF"
  },
  {
    title: "Machine Learning",
    issuer: "Coursera",
    date: "Jan 2022",
    credentialId: "P7SAYGBYQDB3",
    skills: ["NumPy", "Neural Networks", "+5 skills"],
    link: "https://www.coursera.org/account/accomplishments/certificate/P7SAYGBYQDB3"
  },
  {
    title: "Computer Vision",
    issuer: "Kaggle",
    date: "Dec 2021",
    skills: ["Computer Vision", "TensorFlow", "+2 skills"],
    link: "https://www.kaggle.com/learn/certification/zeronp/computer-vision"
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "Dec 2021",
    skills: ["Neural Networks", "Predictive Modeling", "+1 skill"],
    link: "https://www.kaggle.com/learn/certification/zeronp/intermediate-machine-learning"
  },
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    date: "Dec 2021",
    skills: ["Neural Networks", "Computer Vision", "+3 skills"],
    link: "https://www.kaggle.com/learn/certification/zeronp/intro-to-deep-learning"
  },
  {
    title: "Data Cleaning",
    issuer: "Kaggle",
    date: "Nov 2021",
    skills: ["Predictive Modeling", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/zeronp/data-cleaning"
  },
  {
    title: "Data Visualization",
    issuer: "Kaggle",
    date: "Nov 2021",
    skills: ["Predictive Modeling", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/zeronp/data-visualization"
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "Nov 2021",
    skills: ["Predictive Modeling", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/zeronp/intro-to-machine-learning"
  },
  {
    title: "Pandas",
    issuer: "Kaggle",
    date: "Nov 2021",
    skills: ["Predictive Modeling", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/zeronp/pandas"
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "Nov 2021",
    skills: ["Predictive Modeling", "Data Science"],
    link: "https://www.kaggle.com/learn/certification/zeronp/python"
  },
  {
    title: "Codility Golden Award for the Palladium 2020 Challenge",
    issuer: "Codility",
    date: "Oct 2020",
    link: "https://app.codility.com/cert/view/certVM5C4Y-9Z359V85Q3AJ3FB9/"
  },
  {
    title: "Problem Solving (Basic) Skills Certification Test",
    issuer: "HackerRank",
    date: "Jul 2020",
    link: "https://www.hackerrank.com/certificates/a203c09dafe8"
  },
  {
    title: "AWS Fundamentals: Building Serverless Applications",
    issuer: "Coursera",
    date: "Jun 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/6YA6X4NNWWMC"
  },
  {
    title: "Image Super Resolution Using Autoencoders in Keras",
    issuer: "Coursera",
    date: "May 2020",
    credentialId: "4XKAQ34SJFP9",
    link: "https://www.coursera.org/account/accomplishments/verify/4XKAQ34SJFP9"
  },
  {
    title: "Deep Learning Inference with Azure ML Studio",
    issuer: "Coursera",
    date: "May 2020",
    credentialId: "VMMTUDXS37VF",
    link: "https://www.coursera.org/account/accomplishments/verify/VMMTUDXS37VF"
  }
];