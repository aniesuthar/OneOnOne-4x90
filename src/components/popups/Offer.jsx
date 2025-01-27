// components/popups/OfferPopup.tsx
import { usePopup } from "@/contexts/PopupProvider";
import defaults from "@/lib/defaults";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const OfferPopup = () => {
    const { closePopup } = usePopup();

    return (
        <div className="text-center bg-primary py-8 text-primary-foreground flex flex-col lg:flex-row items-center justify-center divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-primary-foreground/40">
            <div className="space-y-4 p-6">
                <p className="font-light font-fancy">Looking for home care?</p>
                <h5 className="font-light">We’re open <span className="font-semibold">24/7.</span> Speak to a live person within minutes.</h5>
                <h2>{defaults.CONTACT_NO}</h2>
            </div>
            <div className="space-y-4 p-6">
                <p className="font-fancy">Looking for home care?</p>
                <Link href="/careers">
                    <Button variant="secondary" className="w-full">APPLY ONLINE</Button>
                </Link>
            </div>
        </div>
    );
};

export default OfferPopup;