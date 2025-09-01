export const PROFILE = {
    name: "Harsh",
    tag: "Machine Learning Engineer • Job aspiring",
    about:
        "Dynamic and results-oriented Python developer with over 1 year of experience in web automation and API development. Proven track record of delivering automated data scraping workflows and built APIs. Skilled in Python, Selenium, Fast API, SQL, React, MongoDB. Seeking to leverage expertise in building efficient backend systems and automation tools to contribute to a dynamic team building modern, scalable backend systems.",
    location: "Silao, Bihar",
    email: "harsh.bhumca21@gmail.com",
    phone: "+91-7250256095",
    photo: "/dp.png",
    links: {
        github: "https://github.com/harsh6468",
        linkedin: "https://www.linkedin.com/in/harsh-9119422a8/",
        resume: "/resume.pdf",
    },
    emailjs_cred:{
        SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
        TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID,
        PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY,
    },
    skills: [
        "Python",
        "Machine Learning",
        "PyTorch",
        "Tensorflow",
        "React",
        "Flask",
        "JavaScript",
        "Tailwind CSS",
        "HTML & CSS",
        "Java",
        "SQL",
        "MySQL",
        "MongoDB",
        "Git & GitHub",
        "FastAPI",
        "Selenium",
        "BeautifulSoup",
        "Pandas",
        "Numpy",
        "Pytorch",
        "Tensorflow",
    ],
    projects: [
        {
            title: "Waste Management Efficiency Prediction",
            desc:
                "Built and deployed a machine learning model to predict waste management efficiency. Implemented data preprocessing pipeline with encoding, scaling, and model persistence using Joblib. Developed a Flask REST API for serving predictions and deployed it on Render Cloud. Optimized performance with cross-validation and hyperparameter tuning for higher accuracy.",
            tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "lasso", "Tailwind CSS", "Matplotlib", "Seaborn", "Flask", "Joblib", "Render"],
            link: "https://waste-management-ce76.onrender.com/",
            repo: "https://github.com/Harsh6468/waste-management",
        },
        {
            title: "Climate Hazard Trend Analyzer ",
            desc:
            "Built a tool to analyze and visualize heatwave trends by region using real-world climate data. Designed interactive charts to highlight high-temperature zones over time. Integrated data filters for users to view patterns by city, state, or custom coordinates.",
            tech: ["Python", "Pandas", "NumPy", "FastAPI", "React", "Tailwind CSS", "Vercel",],
            link: "https://climate-hazard-analyzer.vercel.app/",
            repo: "https://github.com/Harsh6468/climate-hazard-analyzer",
        },
        {
            title: "Real-Time Chat Application",
            desc:
            "A React-based chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can create an account, log in, and chat in real time with other users. The app includes online/offline status indicators, theme customization (light/dark mode), and a responsive user interface for a seamless messaging experience.",
            tech: ["React", "Tailwind CSS", "Nodejs", "Express", "Mongodb", "Render"],
            link: "https://climate-hazard-analyzer.vercel.app/",
            repo: "https://github.com/Harsh6468/chat-app",
        },
        {
            title: "RBAC-UI",
            desc:
            "React Role Management App – Built a role-based access control system where admins can assign and manage user roles with a responsive React UI.",
            tech: ["React", "Tailwind CSS", "vercel"],
            link: "https://rbac-ui-one.vercel.app/",
            repo: "https://github.com/Harsh6468/rbac-ui",
        },
        {
            title: "EV-Dashboard",
            desc:
            "React EV Dashboard – Developed a dashboard in React that reads data from CSV files and generates interactive charts for visualizing EV-related metrics.",
            tech: ["React", "Tailwind CSS", "Chart.js", "vercel"],
            link: "https://ev-dashboard-gilt.vercel.app/",
            repo: "https://github.com/Harsh6468/ev-dashboard",
        },
        {
            title: "Swan Public School",
            desc:
            "Responsive Practice Website – Built a static website using only HTML and CSS, focusing on responsive design across devices.",
            tech: ["HTML", "CSS"],
            link: "https://harsh6468.github.io/swan-public-school",
            repo: "https://github.com/Harsh6468/swan-public-school",
        },
        {
            title: "Get Today's weather",
            desc:
            "Weather Report Website – A simple practice project that fetches and displays the weather report of any city.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://harsh6468.github.io/GetWeather",
            repo: "https://github.com/Harsh6468/GetWeather",
        },
    ],
    education: [
        {
            title: "MCA",
            period: "2021 — 2023",
            detail: "Banaras Hindu University",
            marks: "7.8 CGPA"
        },
        {
            title: "BCA",
            period: "2017 — 2020",
            detail: "Magadh University",
            marks: "76.5%"
        },
        {
            title: "Intermediate",
            period: "2015 — 2016",
            detail: "CBSE",
            marks: "68%"
        },
        {
            title: "Matriculation",
            period: "2013 — 2014",
            detail: "CBSE",
            marks: "9.0 CGPA"
        },
    ],
    experiences:[
        {
            role: "Jr. Python Developer",
            company: "Ocius Technologies LLP",
            period: "September 2023 – October 2024",
            responsibilities: [
                "Migrated data between databases using SQLAlchemy ORM. ",
                "Built simple APIs and learned backend development with FastAPI. ",
                "Researched Google Analytics, Facebook Ads, and Instagram Ads for integration planning."
            ]
        },
        {
            role: "Python Developer Intern",
            company: "Ocius Technologies LLP",
            period: "March 2023 – June 2023",
            responsibilities: [
                "Migrated data between databases using SQLAlchemy ORM. ",
                "Built simple APIs and learned backend development with FastAPI. ",
                "Researched Google Analytics, Facebook Ads, and Instagram Ads for integration planning."
            ]
        },
    ]
};
