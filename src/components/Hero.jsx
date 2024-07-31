import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Revolutionize Your Workflow</h1>
            <p className="text-xl mb-8">Streamline your business processes with our cutting-edge SaaS solution.</p>
            <Button size="lg">Get Started Free</Button>
        </div>
    );
};

export default Hero;
