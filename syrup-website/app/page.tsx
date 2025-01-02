"use client";

import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div
            className={cn(
                "min-h-screen bg-gradient-to-b from-amber-50 to-white",
                roboto.className
            )}
        >
            <Header />
            <main>
                <Hero />
                <HowItWorks />
                <Features />
                <Testimonials />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
