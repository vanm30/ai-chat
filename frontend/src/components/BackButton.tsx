"use client"; // Ensure this runs on the client

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <button className="btn" onClick={handleBack}>
            Back
        </button>
    );
}