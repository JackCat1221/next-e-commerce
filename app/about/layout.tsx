import { ReactNode } from "react";

export default function AboutLayout({children}: {children: ReactNode}) {
    return <div>
        <div className="header text-center bg-green-600">About Page Header</div>
        <div>{children}</div>
    </div>
}