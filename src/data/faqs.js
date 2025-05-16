export const general_faqs = [
    CreateFAQ(
        "What does this app do?", 
        "It helps users manage and track their internship applications, keeping all relevant details organized in one place."),
    CreateFAQ(
        "What features does the app offer?", 
        "The app includes tools for tracking deadlines, application statuses, company information, interview schedules, and follow-up reminders."),
    CreateFAQ(
        "Who can use this app?", 
        "It's tailored for students, graduates, or anyone applying for internships, offering a user-friendly experience."),
    CreateFAQ(
        "How does this app keep me informed?", 
        "It sends notifications and updates about deadlines, application progress, and any next steps required."),
    CreateFAQ(
        "Can I customize the way I track applications?", 
        "Yes, the app allows personalized tracking by letting users add custom fields and tags to organize applications according to their preferences."),
    CreateFAQ(
        "Does the app integrate with other tools?", 
        "It seamlessly connects with platforms like email, calendars, and job boards to simplify the application process."),
    CreateFAQ(
        "How does this app help me stay organized?", 
        "With centralized data, visual summaries like charts and progress bars, and reminders, it ensures you never miss important details or deadlines."),
    CreateFAQ(
        "Is this app secure?", 
        "Absolutely! The app prioritizes user data privacy and secure storage, giving you peace of mind."),
    CreateFAQ(
        "Can the app provide insights or trends?", 
        "It analyzes data to offer useful insights, like identifying patterns in successful applications or highlighting areas for improvement."),
    CreateFAQ(
        "Will the app work offline?", 
        "Yes, the app includes offline functionality, so you can update and review applications anytime, anywhere.")
]

export const application_faqs = [
    CreateFAQ(
        "How can I find internships that match my interests?", 
        "Explore job boards, company websites, and networking opportunities to find internships aligned with your skills and career goals."),
    CreateFAQ(
        "What documents are typically required for an internship application?", 
        "Most applications require a resume, cover letter, and sometimes additional materials like transcripts, portfolios, or references."),
    CreateFAQ(
        "How do I make my internship application stand out?", 
        "Tailor your resume and cover letter to highlight relevant skills and experiences, and demonstrate enthusiasm for the role."),
    CreateFAQ(
        "What should I do if I don't hear back after applying?", 
        "Follow up politely after the application deadline to express continued interest and inquire about the status."),
    CreateFAQ(
        "Are internships usually paid or unpaid?", 
        "This depends on the company and location; it's important to check the details provided in the job description.")
]

function CreateFAQ(question, answer) {
    return {
        question: question,
        answer: answer
    }
}