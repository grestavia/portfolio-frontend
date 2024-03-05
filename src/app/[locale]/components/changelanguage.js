'use client'
import { DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ChangeLanguage() {
    const router = useRouter();

    const changeLanguage = (language) => {
        router.replace(`/${language}`);
    }

    return (
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem value={'id'} onClick={() => changeLanguage('id')}>
                Indonesia
            </DropdownItem>
            <DropdownItem value={'en'} onClick={() => changeLanguage('en')}>
                English
            </DropdownItem>
        </DropdownMenu>
    )
}
