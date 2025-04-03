export default function About() {
    const faqs = [
        { question: "How can I contact support?", answer: "You can contact support via email at support@example.com." },
        { question: "What are your working hours?", answer: "Our working hours are 9 AM to 5 PM, Monday to Friday." },
        { question: "Where are you located?", answer: "We are located at 123 Main Street, Cityville." },
    ];

    return (
        <>
            <div className="container my-5 min-vh-100">
                <h1 className="display-4">Contact Us</h1>
                <p className="lead">We'd love to hear from you! Reach out to us using the information below.</p>
                <div className="mb-4">
                    <h3>Contact Information</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Main Street, Cityville</p>
                </div>
                <div>
                    <h3>FAQs</h3>
                    <div>
                        {faqs.map((faq, index) => (
                            <div key={index} style={{ marginBottom: "1rem" }}>
                                <h5>{faq.question}</h5>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}