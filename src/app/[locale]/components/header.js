import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ChangeLanguage from './changelanguage';
import { Dropdown, DropdownTrigger, Button } from '@nextui-org/react';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header({ lang }) {
    const localActive = useLocale();
    const t = useTranslations('Header');
    let langs;

    if (localActive === 'en') {
        langs = 'English';
    } else if (localActive === 'id') {
        langs = 'Indonesia';
    }
    return (
        <header className='w-full border-2 sticky top-0 flex justify-between items-center py-4 px-10'>
            <section className='text-xl font-black text-neutral-700'>Logo Placeholder.</section>
            <section className='hidden items-center lg:flex'>
                <ul className='flex w-full gap-10 items-center justify-between'>
                    <li><Link href={'/'} className='hover:text-[#505bff] transition-all'>{t('home')}</Link></li>
                    <li><Link href={'/'} className='hover:text-[#505bff] transition-all'>{t('about')}</Link></li>
                    <li><Link href={'/'} className='hover:text-[#505bff] transition-all'>{t('porto')}</Link></li>
                    <li><Link href={'/'} className='hover:text-[#505bff] transition-all'>{t('services')}</Link></li>
                    <li><Link href={'/'} className='hover:text-[#505bff] transition-all'>{t('blog')}</Link></li>
                    <li>
                        <Dropdown>
                            <DropdownTrigger>
                                <div className='flex items-center cursor-pointer hover:text-[#505bff] transition-all'>
                                    <p>{langs}</p>
                                    <MdKeyboardArrowDown />
                                </div>
                            </DropdownTrigger>
                            <ChangeLanguage lang={langs} />
                        </Dropdown>
                    </li>
                    <li><Button className='bg-gradient-to-r from-[#505bff] to-blue-700 text-white'>{t('contact')}</Button></li>
                </ul>
            </section>
        </header>
    );
}