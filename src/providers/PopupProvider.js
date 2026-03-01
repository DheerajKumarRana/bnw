"use client";

import React, { createContext, useContext, useState } from "react";
import RegisterInterestPopup from "@/components/RegisterInterestPopup";

const PopupContext = createContext({
    isPopupOpen: false,
    openPopup: () => { },
    closePopup: () => { }
});

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
            {children}
            {isPopupOpen && <RegisterInterestPopup onClose={closePopup} />}
        </PopupContext.Provider>
    );
};
