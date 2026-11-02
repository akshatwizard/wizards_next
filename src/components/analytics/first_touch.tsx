"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/lead-source";

export default function FirstTouch() {
    useEffect(() => {
        captureFirstTouch();
    }, []);
    return null;
}
