import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children?: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Rafa Peña" />
        <meta
          name="description"
          content={`Información sobre el pokemon LOL ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, etc`} />
        <meta
          property="og:title"
          content={`Información sobre el pokemon LOL ${title}`}
        />
        <meta
          property="og:description"
          content={`Información sobre el pokemon LOL ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
