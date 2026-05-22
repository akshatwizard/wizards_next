export type Testimonial = {
    name: string
    designation: string
    text: string
    profile: string
    rating: number
}

export type VideoTestimonial = {
    name: string
    designation: string
    thumbnail: string
    videoUrl: string
    quote: string
}

export const TEXT_TESTIMONIALS: Testimonial[] = [
    {
        name: 'Ananya S.',
        designation: 'Brand Manager',
        text: 'Every campaign felt thoughtfully crafted. Attention to detail is unmatched — our engagement tripled in two months.',
        profile: '/images/testimonial/img-1.png',
        rating: 5,
    },
    {
        name: 'Rohit M.',
        designation: 'E-Commerce Founder',
        text: 'Our Shopify store went from ₹40K to ₹4L monthly revenue after they took over our ads. Absolutely incredible.',
        profile: '/images/testimonial/img-2.png',
        rating: 4.5,
    },
    {
        name: 'Meera K.',
        designation: 'Healthcare Professional',
        text: 'From strategy to execution, the experience is seamless. They built my personal brand from scratch and it shows.',
        profile: '/images/testimonial/img-3.png',
        rating: 4,
    },
    {
        name: 'Aditi R.',
        designation: 'Education Entrepreneur',
        text: 'The best digital marketing experience I\'ve had.Period.Our leads increased by 250% in the first quarter.',
        profile: '/images/testimonial/img-4.png',
        rating: 5,
    },
    {
        name: 'Kunal P.',
        designation: 'Retail Business Owner',
        text: 'Professional, warm, and incredibly skilled. They understood our Varanasi audience better than anyone else.',
        profile: '/images/testimonial/img-5.png',
        rating: 4.5,
    },
    {
        name: 'Priya T.',
        designation: 'Restaurant Owner',
        text: 'Our social media presence transformed overnight. Content quality and consistency is something else entirely.',
        profile: '/images/testimonial/img-1.png',
        rating: 5,
    },
    {
        name: 'Vikram S.',
        designation: 'Corporate Director',
        text: 'ROI-focused and transparent. Every rupee spent on ads was tracked and optimised. Highly recommend them.',
        profile: '/images/testimonial/img-2.png',
        rating: 4.5,
    },
    {
        name: 'Sunita D.',
        designation: 'Jewellery Retailer',
        text: 'Sales doubled within 3 months of working with them. The Instagram strategy they built is still running strong.',
        profile: '/images/testimonial/img-3.png',
        rating: 5,
    },
]

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
    {
        name: 'Ananya S.',
        designation: 'Brand Manager',
        thumbnail: '/images/testimonial/img-1.png',
        videoUrl: '#',
        quote: 'Tripled our engagement in two months.',
    },
    {
        name: 'Rohit M.',
        designation: 'E-Commerce Founder',
        thumbnail: '/images/testimonial/img-2.png',
        videoUrl: '#',
        quote: '10× monthly revenue with their ads.',
    },
    {
        name: 'Meera K.',
        designation: 'Healthcare Professional',
        thumbnail: '/images/testimonial/img-3.png',
        videoUrl: '#',
        quote: 'Built my personal brand from scratch.',
    },
    {
        name: 'Aditi R.',
        designation: 'Education Entrepreneur',
        thumbnail: '/images/testimonial/img-4.png',
        videoUrl: '#',
        quote: '250% increase in leads, first quarter.',
    },
    {
        name: 'Kunal P.',
        designation: 'Retail Business Owner',
        thumbnail: '/images/testimonial/img-5.png',
        videoUrl: '#',
        quote: 'They understood our audience perfectly.',
    },
    {
        name: 'Priya T.',
        designation: 'Restaurant Owner',
        thumbnail: '/images/testimonial/img-1.png',
        videoUrl: '#',
        quote: 'Content quality unlike anything before.',
    },
]
