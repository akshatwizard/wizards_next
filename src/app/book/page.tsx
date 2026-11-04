import { Metadata } from "next";
import BookingApp from "@/components/book/booking_app";

export const metadata: Metadata = {
    title: "Book a Free 30-Min Exploration Call | Wizards Next",
    description: "Pick a time for a free 30-minute Exploration Call with Wizards Next on Google Meet. Confirmation and reminders on WhatsApp.",
    alternates: {
        canonical: "/book",
    },
};

export default function BookPage() {
    return <BookingApp />;
}
