import React from 'react';
import { CheckCircle } from 'lucide-react';

const Feature = ({ title, description }) => (
    <div className="flex items-start mb-6">
        <CheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0" />
        <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const Features = () => {
    const features = [
        { title: "Easy Integration", description: "Seamlessly integrate with your existing tools and workflows." },
        { title: "Real-time Analytics", description: "Get instant insights with our powerful analytics dashboard." },
        { title: "Secure & Reliable", description: "Bank-level security and 99.9% uptime guarantee." },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Features That Set Us Apart</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <Feature key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
