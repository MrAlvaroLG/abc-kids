'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { 
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleLeftRightIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ContactForm() {
    const t = useTranslations('contactPage.form');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setSent(true);
        setTimeout(() => {
            setSent(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 3000);
    };

    const subjects = [
        { value: 'general', label: t('subjects.general') },
        { value: 'tour', label: t('subjects.tour') },
        { value: 'enrollment', label: t('subjects.enrollment') },
        { value: 'programs', label: t('subjects.programs') },
        { value: 'other', label: t('subjects.other') }
    ];

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-navy-900/5">
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
                    {t('title')}
                </h2>
                <p className="text-navy-900/60">
                    {t('subtitle')}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                        {t('name')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <UserIcon className="h-5 w-5 text-navy-900/40" />
                        </div>
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={sent}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-navy-900/10 rounded-xl text-navy-900 placeholder-navy-900/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                            placeholder={t('namePlaceholder')}
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                        {t('email')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <EnvelopeIcon className="h-5 w-5 text-navy-900/40" />
                        </div>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={sent}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-navy-900/10 rounded-xl text-navy-900 placeholder-navy-900/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                            placeholder={t('emailPlaceholder')}
                        />
                    </div>
                </div>

                {/* Phone Input */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                        {t('phone')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <PhoneIcon className="h-5 w-5 text-navy-900/40" />
                        </div>
                        <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            disabled={sent}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-navy-900/10 rounded-xl text-navy-900 placeholder-navy-900/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                            placeholder={t('phonePlaceholder')}
                        />
                    </div>
                </div>

                {/* Subject Select */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-navy-900 mb-2">
                        {t('subject')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <ChatBubbleLeftRightIcon className="h-5 w-5 text-navy-900/40" />
                        </div>
                        <select
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                            disabled={sent}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-navy-900/10 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                        >
                            <option value="">{t('subjectPlaceholder')}</option>
                            {subjects.map((subject) => (
                                <option key={subject.value} value={subject.value}>
                                    {subject.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Message Textarea */}
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                        {t('message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        disabled={sent}
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-navy-900/10 rounded-xl text-navy-900 placeholder-navy-900/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                        placeholder={t('messagePlaceholder')}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={sent}
                    className="w-full relative overflow-hidden group bg-linear-to-r from-accent to-accent-hover text-navy-900 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] disabled:hover:scale-100"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {sent ? (
                            <>
                                <CheckCircleIcon className="w-6 h-6" />
                                {t('sent')}
                            </>
                        ) : (
                            <>
                                <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                {t('submit')}
                            </>
                        )}
                    </span>
                </button>

                <p className="text-xs text-navy-900/50 text-center">
                    {t('disclaimer')}
                </p>
            </form>
        </div>
    );
}
