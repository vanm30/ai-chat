import { BeakerIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'


import Link from "next/link";

interface INavbar {
    direction: 'row' | 'col';
    className?: string;
}

function NavButton() {
    return (
        <Link className="btn btn-ghost  btn-block text-xs" href="/chat/1">
            <div className="flex flex-col items-center">
               <ChatBubbleBottomCenterTextIcon className='size-6' />
                <span>Chat with </span>
            </div>
        </Link>
    )
}

export default function Navbar({ direction, className }: INavbar) {
    return (
        <nav className={`navbar flex-${direction} ${className} pt-8 pb-8`}>
            <div className="flex-0">

            </div>
            <div className="flex flex-col items-center justify-center gap-8 flex-1">
                <NavButton />
                <NavButton />
            </div>
            <div className="flex-0">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
}