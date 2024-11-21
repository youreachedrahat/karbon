import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import WalletConnectors from "./WalletConnectors";
import { Wallet } from "@/types/cardano";
import { useState } from "react";
import Link from "next/link";

export const Navbar = (props: { onConnectWallet: (wallet: Wallet) => Promise<void>, balance: Number | undefined, resetLucid: () => void }) => {
  const { onConnectWallet, resetLucid, balance } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Talendro</p> {/*  font Comfortaa Bold Alt1 */}
          </NextLink>
        </NavbarBrand>



      </NavbarContent>

      <NavbarContent
        className="sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden md:flex">
          <WalletConnectors onConnectWallet={onConnectWallet} balance={balance} resetLucid={resetLucid} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden justify-end"
        />
      </NavbarContent>
      <NavbarMenu className="py-10">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="my-10">
          <WalletConnectors onConnectWallet={onConnectWallet} balance={balance} resetLucid={resetLucid} />
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};