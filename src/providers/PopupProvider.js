"use client";

import React, { createContext, useContext, useState } from "react";
import RegisterInterestPopup from "@/components/RegisterInterestPopup";
import HelpPopup from "@/components/HelpPopup";

const PopupContext = createContext({
    isPopupOpen: false,
    openPopup: () => { },
    closePopup: () => { },
    projectName: "",
    isHelpPopupOpen: false,
    openHelpPopup: () => { },
    closeHelpPopup: () => { }
});

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false);

    const openPopup = (name = "") => {
        setProjectName(name);
        setIsPopupOpen(true);
    };
    const closePopup = () => setIsPopupOpen(false);

    const openHelpPopup = () => setIsHelpPopupOpen(true);
    const closeHelpPopup = () => setIsHelpPopupOpen(false);

    return (
        <PopupContext.Provider value={{
            isPopupOpen, openPopup, closePopup, projectName,
            isHelpPopupOpen, openHelpPopup, closeHelpPopup
        }}>
            {children}
            {isPopupOpen && <RegisterInterestPopup onClose={closePopup} projectName={projectName} />}
            {isHelpPopupOpen && <HelpPopup onClose={closeHelpPopup} />}
        </PopupContext.Provider>
    );
};
