import {
    Stethoscope, Plane, ShoppingBag, School, Car,
    Shirt, Building2, Laptop, Wrench, UtensilsCrossed,
} from 'lucide-react'

export type Industry = {
    icon: React.ElementType
    name: string
    sub: string
    count: string
    iconBg: string
    iconColor: string
}

export const INDUSTRIES: Industry[] = [
    {
        icon: Stethoscope,
        name: 'Healthcare',
        sub: 'Doctors, clinics & hospitals',
        count: '12+',
        iconBg: 'bg-emerald-600/10',
        iconColor: 'text-emerald-500',
    },
    {
        icon: Plane,
        name: 'Travel & Tourism',
        sub: 'Agencies & tour operators',
        count: '8+',
        iconBg: 'bg-sky-600/10',
        iconColor: 'text-sky-500',
    },
    {
        icon: ShoppingBag,
        name: 'FMCG',
        sub: 'Consumer goods brands',
        count: '15+',
        iconBg: 'bg-amber-600/10',
        iconColor: 'text-amber-500',
    },
    {
        icon: School,
        name: 'Education',
        sub: 'Schools, coaching & ed-tech',
        count: '10+',
        iconBg: 'bg-violet-600/10',
        iconColor: 'text-violet-500',
    },
    {
        icon: Car,
        name: 'Automotive',
        sub: 'Dealers & service centres',
        count: '6+',
        iconBg: 'bg-zinc-600/10',
        iconColor: 'text-zinc-400',
    },
    {
        icon: Shirt,
        name: 'Retail',
        sub: 'Fashion, jewellery & lifestyle',
        count: '20+',
        iconBg: 'bg-rose-600/10',
        iconColor: 'text-rose-500',
    },
    {
        icon: Building2,
        name: 'Corporate',
        sub: 'B2B & enterprise services',
        count: '9+',
        iconBg: 'bg-green-600/10',
        iconColor: 'text-green-500',
    },
    {
        icon: Laptop,
        name: 'E-Commerce',
        sub: 'D2C & Shopify stores',
        count: '18+',
        iconBg: 'bg-pink-600/10',
        iconColor: 'text-pink-500',
    },
    {
        icon: UtensilsCrossed,
        name: 'Food & Dining',
        sub: 'Restaurants & cloud kitchens',
        count: '11+',
        iconBg: 'bg-orange-600/10',
        iconColor: 'text-orange-500',
    },
    {
        icon: Wrench,
        name: 'Local Services',
        sub: 'Salons, gyms & home services',
        count: '14+',
        iconBg: 'bg-blue-600/10',
        iconColor: 'text-blue-500',
    },
]