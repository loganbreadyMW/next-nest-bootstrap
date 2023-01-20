import { FileIcon } from '@atoms/Logos/ Navigation/FileIcon';
import { HomeIcon } from '@atoms/Logos/ Navigation/HomeIcon';
import { LogOutIcon } from '@atoms/Logos/ Navigation/LogOutIcon';
import { PieIcon } from '@atoms/Logos/ Navigation/PieIcon';
import { SettingsIcon } from '@atoms/Logos/ Navigation/SettingsIcon';
import { StorageIcon } from '@atoms/Logos/ Navigation/StorageIcon';
import { TrashIcon } from '@atoms/Logos/ Navigation/TrashIcon';
import { useWindowSize } from '@hooks/useWindowSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './LeftMainNavigation.module.scss';

export const NavigationIcons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (size?.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);
  return (
    <>
      <ul className={styles['navigation-icons-ul']}>
        <li>
          <div
            style={{ background: isMobile ? '#000' : '#fff' }}
            className={router.pathname == '/' ? styles['active-link-bar'] : ''}
          ></div>
          <Link href='/'>
            <HomeIcon color={!isMobile ? '#fff' : '#000'} height='24' width='24' />
          </Link>
        </li>
        <li>
          <div
            style={{ background: isMobile ? '#000' : '#fff' }}
            className={router.pathname == '/charts' ? styles['active-link-bar'] : ''}
          ></div>
          <Link href='/charts'>
            <PieIcon color={!isMobile ? '#fff' : '#000'} height='24' width='24' />
          </Link>
        </li>
        <li>
          <div
            style={{ background: isMobile ? '#000' : '#fff' }}
            className={router.pathname == '/files' ? styles['active-link-bar'] : ''}
          ></div>
          <Link href='/files'>
            <FileIcon color={!isMobile ? '#fff' : '#000'} height='24' width='24' />
          </Link>
        </li>
        <li>
          <div
            style={{ background: isMobile ? '#000' : '#fff' }}
            className={router.pathname == '/storage' ? styles['active-link-bar'] : ''}
          ></div>
          <Link href='/storage'>
            <StorageIcon color={!isMobile ? '#fff' : '#000'} height='24' width='24' />
          </Link>
        </li>
        <li>
          <div
            style={{ background: isMobile ? '#000' : '#fff' }}
            className={router.pathname == '/trash' ? styles['active-link-bar'] : ''}
          ></div>
          <Link href='/trash'>
            <TrashIcon color={!isMobile ? '#fff' : '#000'} height='24' width='24' />
          </Link>
        </li>
      </ul>
      {isMobile && (
        <ul className={styles['mobile-navigation-icons']}>
          <li>
            <SettingsIcon />
          </li>
          <li>
            <LogOutIcon />
          </li>
        </ul>
      )}
    </>
  );
};
