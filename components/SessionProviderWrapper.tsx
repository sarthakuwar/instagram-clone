"use client"; // This directive is necessary to indicate that this component should be rendered on the client side

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
