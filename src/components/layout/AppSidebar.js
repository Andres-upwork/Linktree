'use client';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LogoutButton from "../Buttons/LogoutButton";
import { usePathname } from "next/navigation";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faChartLine  } from "@fortawesome/free-solid-svg-icons";

export default function AppSidebar() {
    const path = usePathname();
    return (
        <nav className="inline-flex mx-auto flex-col text-center mt-8 gap-7 text-gray-500">
              
              <Link href={'/account'} 
                className={"flex gap-4 " 
                + (path === '/account' ? 'text-blue-500' : '')}>
                <FontAwesomeIcon 
                  fixedWidth={true}
                  icon={faFileLines} 
                  className="w-6 h-6"/>
                <span className="">Ma page</span>
              </Link>
              
              <Link href={'/analytics'} 
                className={"flex gap-4 " 
                + (path === '/analytics' ? 'text-blue-500' : '')}>
                <FontAwesomeIcon 
                  fixedWidth={true}
                  icon={faChartLine} 
                  className="w-6 h-6"
                  />
                <span className="">Analyse</span>
              </Link>

              <LogoutButton 
                iconLeft={true} 
                className={'flex gap-4 items-center text-gray-500'} 
                iconClasses={'w-6 h-6'}
              />
              <Link href={'/'} className="flex items-center gap-2 text-xs text-gray-500 border-t pt-4">
                <FontAwesomeIcon icon={faArrowLeft} className={'w-3 h-3'} />
                <span>Retour au site</span>
              </Link>

            
              </nav>
    );
}