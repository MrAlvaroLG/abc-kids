'use client';

import { useTranslations } from 'next-intl';
import { 
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

export default function ContactInfo() {
    const t = useTranslations('contactPage.info');

    const contactDetails = [
        {
            icon: MapPinIcon,
            title: t('address.title'),
            content: (
                <>
                    <p>1745 W Fletcher Ave</p>
                    <p>Tampa, FL 33612</p>
                </>
            ),
            link: 'https://maps.google.com/?q=1745+W+Fletcher+Ave,+Tampa,+FL+33612',
            linkText: t('address.directions')
        },
        {
            icon: PhoneIcon,
            title: t('phone.title'),
            content: <p>+1 (813) 512-2511</p>,
            link: 'tel:+18135122511',
            linkText: t('phone.call')
        },
        {
            icon: EnvelopeIcon,
            title: t('email.title'),
            content: <p>info@abckids.com</p>,
            link: 'mailto:info@abckids.com',
            linkText: t('email.send')
        }
    ];

    const schedule = [
        { day: t('schedule.monday'), hours: '7:00 AM - 6:00 PM', open: true },
        { day: t('schedule.tuesday'), hours: '7:00 AM - 6:00 PM', open: true },
        { day: t('schedule.wednesday'), hours: '7:00 AM - 6:00 PM', open: true },
        { day: t('schedule.thursday'), hours: '7:00 AM - 6:00 PM', open: true },
        { day: t('schedule.friday'), hours: '7:00 AM - 6:00 PM', open: true },
        { day: t('schedule.saturday'), hours: t('schedule.closed'), open: false },
        { day: t('schedule.sunday'), hours: t('schedule.closed'), open: false }
    ];

    return (
        <div className="space-y-6">
            {/* Contact Details Cards */}
            {contactDetails.map((detail, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-navy-900/5 hover:shadow-xl transition-all duration-300"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-linear-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center shrink-0">
                            <detail.icon className="w-6 h-6 text-navy-900" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-navy-900 mb-2">
                                {detail.title}
                            </h3>
                            <div className="text-navy-900/70 text-sm mb-3">
                                {detail.content}
                            </div>
                            <a
                                href={detail.link}
                                target={detail.icon === MapPinIcon ? '_blank' : undefined}
                                rel={detail.icon === MapPinIcon ? 'noopener noreferrer' : undefined}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-200"
                            >
                                {detail.linkText}
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Schedule Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-navy-900/5">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <ClockIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">
                        {t('schedule.title')}
                    </h3>
                </div>
                <div className="space-y-2">
                    {schedule.map((item, index) => (
                        <div 
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-navy-900/5 last:border-0"
                        >
                            <span className="text-sm font-semibold text-navy-900">
                                {item.day}
                            </span>
                            <span className={`text-sm font-medium ${item.open ? 'text-navy-900/70' : 'text-red-500'}`}>
                                {item.hours}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
