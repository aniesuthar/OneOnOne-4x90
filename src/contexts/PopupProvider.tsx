"use client";

import OfferPopup from "@/components/popups/Offer";
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";

interface PopupContextProps {
    showPopup: (content: ReactNode, delay?: number) => void; // Added delay parameter
    closePopup: () => void;
}

const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popupContent, setPopupContent] = useState<ReactNode | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const showPopup = (content: ReactNode, delay: number = 0) => {
        // If delay is greater than 0, set a timeout
        if (delay > 0) {
            setTimeout(() => {
                setPopupContent(content);
                setIsVisible(true);
            }, delay);
        } else {
            setPopupContent(content);
            setIsVisible(true);
        }
    };

    const closePopup = () => {
        setIsVisible(false);
        setPopupContent(null);
    };

    // Close the popup if the user clicks outside of it
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                closePopup();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // const { showPopup } = usePopup();

    React.useEffect(() => {
        showPopup(<OfferPopup />, 15000);
        return () => {
        };
    }, []);

    return (
        <PopupContext.Provider value={{ showPopup, closePopup }}>
            {children}
            {isVisible && popupContent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div ref={popupRef}
                        className={cn(`relative bg-white rounded-lg shadow-lg lg:max-w-4xl w-[86%] transition-opacity duration-2000 ease-out`,
                            isVisible ? 'opacity-100' : 'opacity-0')}
                    >
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        {popupContent}
                    </div>
                </div>
            )}
        </PopupContext.Provider>
    );
};

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error("usePopup must be used within a PopupProvider");
    }
    return context;
};