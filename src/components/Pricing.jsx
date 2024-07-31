import React from 'react';
import { Button } from "@/components/ui/button";

const PricingTier = ({ name, price, features }) => (
    <div className="border rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-3xl font-bold mb-4">${price}<span className="text-sm font-normal">/month</span></p>
        <ul className="mb-6 text-left">
            {features.map((feature, index) => (
                <li key={index} className="mb-2">
                    {feature}
                </li>
            ))}
        </ul>
        <Button variant="outline" className="w-full">Choose Plan</Button>
    </div>
);

const Pricing = () => {
    const plans = [
        { name: "Basic", price: 29, features: ["5 Users", "10GB Storage", "Basic Support"] },
        { name: "Pro", price: 79, features: ["Unlimited Users", "100GB Storage", "Priority Support", "Advanced Analytics"] },
        { name: "Enterprise", price: 199, features: ["Unlimited Users", "1TB Storage", "24/7 Support", "Custom Integrations"] },
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingTier key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
