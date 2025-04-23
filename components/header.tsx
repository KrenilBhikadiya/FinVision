import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
    return (
        <div className="fixed top-0 w-full bg-black backdrop-blur-md z-50 border-b">

            <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href={"/"}>
                    <Image
                        src={"/FinVisionLogo.png"}
                        alt="FinVision Logo"
                        height={60}
                        width={200}
                        className="h-12 w-auto object-contain rounded-xl"
                    />
                </Link>

                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Link href={"/dashboard"} className="text-blue-900 hover:text-gray-700 flex items-center gap-2">
                            <Button variant={"outline"}>
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>

                        <Link href={"/transaction/create"} className="text-blue-900 hover:text-gray-700 flex items-center gap-2">
                            <Button variant={"outline"} className="flex items-center gap-2">
                                <PenBox size={18} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl={"/dashboard"}>
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                        <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {avatarBox: "h-40 w-40"},
                        }}/>
                    </SignedIn>
                </div>
            </nav>
        </div>
    );
}

export default Header;
