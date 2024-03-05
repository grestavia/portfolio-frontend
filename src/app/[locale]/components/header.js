import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ChangeLanguage from './changelanguage';
import { Dropdown, DropdownTrigger, Button } from '@nextui-org/react';

export default function Header({ lang }) {
    const localActive = useLocale();
    const t = useTranslations('Header');
    return (
        <header className='w-full border-2 sticky top-0 flex justify-between gap-6 items-center p-4'>
            <section className='w-full flex-1'>Logo</section>
            <section className='w-full'>
                <ul className='flex w-full justify-between'>
                    <li><Link href={'/'}>{t('home')}</Link></li>
                    <li><Link href={'/'}>{t('about')}</Link></li>
                    <li><Link href={'/'}>{t('porto')}</Link></li>
                    <li><Link href={'/'}>{t('services')}</Link></li>
                    <li><Link href={'/'}>{t('blog')}</Link></li>
                </ul>
            </section>
            <section className='flex'>
                <Button>{t('contact')}</Button>
                <Dropdown>
                    <DropdownTrigger>
                        <p className='uppercase'>{localActive}</p>
                    </DropdownTrigger>
                    <ChangeLanguage />
                </Dropdown>
            </section>
        </header>
    );
}