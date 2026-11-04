// Social Media Management (SMM) clients — brands whose Instagram we manage.
// Powers /social-media-clients and the homepage "Brands we manage on social"
// strip; each card links to the full case study at /our-works/[slug]. To add a client,
// append one object and drop its Instagram profile picture in
// /public/images/smm/[slug].jpg.
//
// `avatar` is the Instagram profile picture; `logo` is an optional sharper
// logo taken from the client's own website, preferred on the detail page.

export type SmmClient = {
    slug: string
    name: string
    sector: string
    tagline: string
    instagram: { handle: string; url: string }
    website?: string
    avatar?: string
    logo?: string
}

const ig = (handle: string) => ({ handle, url: `https://www.instagram.com/${handle}/` })

export const smmClients: SmmClient[] = [
    {
        slug: "dr-k-shilpi-reddy",
        name: "Dr K Shilpi Reddy",
        sector: "Healthcare",
        tagline: "Obstetrician and gynaecologist in Hyderabad.",
        instagram: ig("dr.k.shilpireddy"),
        website: "https://shilpireddy.com",
        avatar: "/images/smm/dr-k-shilpi-reddy.jpg",
    },
    {
        slug: "mrs-mom-event",
        name: "Mrs Mom Event",
        sector: "Events",
        tagline: "An empowering, nurturing event designed exclusively for pregnant women.",
        instagram: ig("mrsmomevent"),
        website: "https://www.mrsmomevent.com",
        avatar: "/images/smm/mrs-mom-event.jpg",
    },
    {
        slug: "dr-ankita-chauhan",
        name: "Dr Ankita Chauhan",
        sector: "Healthcare",
        tagline: "Consultant gynaecologist and obstetrician in Gachibowli, Hyderabad — pregnancy care, infertility and PCOS management.",
        instagram: ig("dr.ankitachauhan_"),
        website: "https://drankitachauhan.com",
        avatar: "/images/smm/dr-ankita-chauhan.png",
    },
    {
        slug: "dr-aradhya-achuri",
        name: "Dr Aradhya Achuri",
        sector: "Healthcare",
        tagline: "Fertility and IVF specialist in Hyderabad.",
        instagram: ig("draradhyaachuri"),
        website: "https://draradhyaachuri.com",
        avatar: "/images/smm/dr-aradhya-achuri.jpg",
    },
    {
        slug: "dr-satyanarayana-garre",
        name: "Dr Satyanarayana Garre",
        sector: "Healthcare",
        tagline: "Nephrologist in Hyderabad, treating kidney disorders.",
        instagram: ig("drsatyanarayana_garre"),
        website: "https://drsatyanarayanagarre.in",
        avatar: "/images/smm/dr-satyanarayana-garre.jpg",
        logo: "/images/smm/dr-satyanarayana-garre-logo.svg",
    },
    {
        slug: "dhanuka-silks",
        name: "Dhanuka Silks",
        sector: "Retail",
        tagline: "Varanasi store for sarees, bridal wear and festive ethnic fashion.",
        instagram: ig("dhanukasilks"),
        website: "https://dhanukasilks.com",
        avatar: "/images/smm/dhanuka-silks.jpg",
    },
    {
        slug: "sunbeam-academy",
        name: "Sunbeam Academy",
        sector: "Education",
        tagline: "CBSE school in Varanasi.",
        instagram: ig("sunbeam.academy"),
        website: "https://www.sunbeamacademy.com",
        avatar: "/images/smm/sunbeam-academy.jpg",
        logo: "/images/smm/sunbeam-academy-logo.png",
    },
    {
        slug: "pdr-mall",
        name: "PDR Mall",
        sector: "Retail",
        tagline: "Shopping, dining and entertainment mall in Varanasi.",
        instagram: ig("pdrmall"),
        avatar: "/images/smm/pdr-mall.jpg",
    },
    {
        slug: "rk-marbles-varanasi",
        name: "RK Marbles Varanasi",
        sector: "Retail",
        tagline: "Tiles and marble store in Varanasi.",
        instagram: ig("rkmarbles.varanasi"),
        avatar: "/images/smm/rk-marbles-varanasi.jpg",
    },
    {
        slug: "armonia-varanasi",
        name: "Armonia Varanasi",
        sector: "Retail",
        tagline: "Home décor and gifts store in Sigra, Varanasi.",
        instagram: ig("armonia_varanasi"),
        avatar: "/images/smm/armonia-varanasi.jpg",
    },
    {
        slug: "banarsi-saree",
        name: "Banarsi Saree",
        sector: "E-Commerce",
        tagline: "Online store for Banarasi silk sarees made in Varanasi.",
        instagram: ig("banarsi.sarees"),
        website: "https://banarsisaree.com",
        avatar: "/images/smm/banarsi-saree.jpg",
        logo: "/images/smm/banarsi-saree-logo.png",
    },
    {
        slug: "b-khaitan",
        name: "B Khaitan",
        sector: "Consultancy",
        tagline: "Rice mill consultant with 46 years of experience, working across India.",
        instagram: ig("bajrangkhaitan"),
        website: "https://www.ricemillconsultant.com",
        avatar: "/images/smm/b-khaitan.jpg",
        logo: "/images/smm/b-khaitan-logo.png",
    },
    {
        slug: "gnsr-textiles",
        name: "GNSR Textiles",
        sector: "Textiles",
        tagline: "Textiles business.",
        instagram: ig("gnsr_textiles"),
        avatar: "/images/smm/gnsr-textiles-logo.webp",
        logo: "/images/smm/gnsr-textiles-logo.webp",
    },
    {
        slug: "maansinghka-agencies",
        name: "Maansinghka Agencies",
        sector: "FMCG",
        tagline: "Makers of The Taste King — cold-pressed Kacchi Ghani mustard oil from Varanasi.",
        instagram: ig("maansinghka_agencies"),
        website: "https://www.maansinghkaagencies.com",
        avatar: "/images/smm/maansinghka-agencies.jpg",
    },
    {
        slug: "kasibunkari",
        name: "Kasibunkari",
        sector: "Retail",
        tagline: "Ethnic wear — sarees, lehengas and suits.",
        instagram: ig("kasibunkari"),
        website: "https://www.kasibunkari.com",
        avatar: "/images/smm/kasibunkari.jpg",
        logo: "/images/smm/kasibunkari-logo.webp",
    },
]

export function getSmmClientBySlug(slug: string): SmmClient | undefined {
    return smmClients.find((c) => c.slug === slug)
}
