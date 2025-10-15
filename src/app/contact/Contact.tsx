"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const form = event.target as HTMLFormElement;
            const formData = new FormData(form);

            // Web3Forms access key
            formData.append('access_key', 'fb8b7e8b-39ec-4f4e-b7fe-68eac723cfc4');

            // Optional: combine names for services that expect a single name field
            const firstName = (formData.get('firstName') as string) || '';
            const lastName = (formData.get('lastName') as string) || '';
            if (!formData.get('name')) {
                formData.append('name', `${firstName} ${lastName}`.trim());
            }

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            });

            const result = await response.json();

            if (result?.success) {
                setSubmitStatus('success');
                form.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="relative min-h-[80vh] text-slate-900 dark:text-gray-100">
            {/* Subtle branded gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-purple-100 dark:from-transparent dark:via-purple-900/15 dark:to-transparent pointer-events-none" />

            {/* Decorative blobs (brand-consistent) */}
            <div
                className="absolute top-1/4 left-[10%] w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-blue-300/30 dark:bg-blue-600/10 blur-3xl animate-pulse"
                style={{ animationDelay: '0s' }}
            />
            <div
                className="absolute bottom-1/4 right-[10%] w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-indigo-300/30 dark:bg-indigo-600/10 blur-3xl animate-pulse"
                style={{ animationDelay: '1s' }}
            />

            {/* Hero Section */}
            <section className="relative pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-200 mb-3 sm:mb-4">
                        Get in touch with{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 bg-clip-text text-transparent">Interconnect</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
                        We&apos;d love to hear from you. Fill out the form or reach out directly.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {/* Contact Information */}
                        <div className="md:col-span-1 lg:col-span-1 space-y-4 sm:space-y-6">
                            {/* Email */}
                            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl shadow-purple-200/40 dark:shadow-purple-900/30 border border-purple-200/50 dark:border-purple-500/20">
                                <div className="flex items-center">
                                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-purple-200/40 to-indigo-200/40 dark:from-purple-600/10 dark:to-indigo-600/10 flex-shrink-0">
                                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="ml-3 sm:ml-4 min-w-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-purple-700 dark:text-purple-200 mb-1 sm:mb-1.5">Email</h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 break-all">
                                            <a href="mailto:info@interconnect.co.ke" className="hover:underline">info@interconnect.co.ke</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone (Kenya) */}
                            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl shadow-purple-200/40 dark:shadow-purple-900/30 border border-purple-200/50 dark:border-purple-500/20">
                                <div className="flex items-center">
                                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-purple-200/40 to-indigo-200/40 dark:from-purple-600/10 dark:to-indigo-600/10 flex-shrink-0">
                                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="ml-3 sm:ml-4 min-w-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-purple-700 dark:text-purple-200 mb-1 sm:mb-1.5">Phone</h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300">
                                            <a href="tel:+254788871946" className="hover:underline">+254 788 871 946</a>
                                        </p>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300">
                                            <a href="tel:+447586752568" className="hover:underline">+44 7586 752 568</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl shadow-purple-200/40 dark:shadow-purple-900/30 border border-purple-200/50 dark:border-purple-500/20">
                                <div className="flex items-start">
                                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-purple-200/40 to-indigo-200/40 dark:from-purple-600/10 dark:to-indigo-600/10 flex-shrink-0">
                                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="ml-3 sm:ml-4 min-w-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-purple-700 dark:text-purple-200 mb-1 sm:mb-1.5">Address</h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                                            Nairobi, Kenya
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-1 lg:col-span-2">
                            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl shadow-purple-200/40 dark:shadow-purple-900/30 border border-purple-200/50 dark:border-purple-500/20">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-200 mb-4 sm:mb-6">Send us a message</h2>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-emerald-500/10 dark:bg-green-500/10 border border-emerald-400/40 dark:border-green-500/30 rounded-xl flex items-center" role="status" aria-live="polite">
                                        <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-green-400 mr-3" />
                                        <p className="text-emerald-700 dark:text-green-200">Thank you! Your message has been sent successfully.</p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-500/10 border border-red-400/30 rounded-xl flex items-center" role="alert" aria-live="assertive">
                                        <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-3" />
                                        <p className="text-red-600 dark:text-red-200">Something went wrong. Please try again.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 dark:bg-transparent border border-slate-200/70 dark:border-gray-600/60 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 dark:focus:border-transparent transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-gray-500 text-slate-900 dark:text-gray-100"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 dark:bg-transparent border border-slate-200/70 dark:border-gray-600/60 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 dark:focus:border-transparent transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-gray-500 text-slate-900 dark:text-gray-100"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                            Email Address <span className="text-red-500 dark:text-red-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 dark:bg-transparent border border-slate-200/70 dark:border-gray-600/60 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 dark:focus:border-transparent transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-gray-500 text-slate-900 dark:text-gray-100"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 dark:bg-transparent border border-slate-200/70 dark:border-gray-600/60 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 dark:focus:border-transparent transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-gray-500 text-slate-900 dark:text-gray-100"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                            Your Message <span className="text-red-500 dark:text-red-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 dark:bg-transparent border border-slate-200/70 dark:border-gray-600/60 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-300 dark:focus:border-transparent transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-gray-500 text-slate-900 dark:text-gray-100 resize-none"
                                            placeholder="Tell us about your project or how we can help..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-lg shadow-purple-200/60 dark:shadow-indigo-500/25 hover:shadow-purple-300/80 dark:hover:shadow-indigo-400/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local animation keyframes for blobs */}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(1.05); }
                }
                .animate-pulse {
                    animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </main>
    );
}
