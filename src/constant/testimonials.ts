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

// Checked wizards.co.in thoroughly (homepage, all 11 industry/portfolio pages,
// About, Career, Blogs, Contact) — there are no real client testimonial
// quotes anywhere on the old site to carry over. The previous content here
// was invented (fake names, fake specific revenue/lead numbers) and has been
// removed rather than replaced with more invented content.
//
// To add real testimonials once collected: add entries here in the same
// shape. The component below renders nothing when these arrays are empty,
// so the section simply reappears on its own once real data exists —
// no other file needs to change.
export const TEXT_TESTIMONIALS: Testimonial[] = []

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = []
