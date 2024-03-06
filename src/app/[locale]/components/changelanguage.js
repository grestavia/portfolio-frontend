'use client'
import { DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ChangeLanguage({ lang }) {
    const router = useRouter();
    const [selectedLang, setSelectedLang] = useState(lang === 'Indonesia' ? 'id' : 'en');

    useEffect(() => {
        if (lang === 'Indonesia') {
            setSelectedLang('id');
        } else if (lang === 'English') {
            setSelectedLang('en');
        }
    }, [lang]);

    const changeLanguage = (language) => {
        router.replace(`/${language}`);
    }

    return (
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem className={selectedLang === 'id' ? 'bg-gradient-to-r from-blue-600 to-[#505bff] text-white' : ''} value={'id'} onClick={() => changeLanguage('id')}>
                Indonesia
            </DropdownItem>
            <DropdownItem className={selectedLang === 'en' ? 'bg-gradient-to-r from-blue-600 to-[#505bff] text-white' : ''} value={'en'} onClick={() => changeLanguage('en')}>
                English
            </DropdownItem>
        </DropdownMenu>
    )
}
