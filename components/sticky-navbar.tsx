"use client"

import Link from "next/link"
import { ChevronDown, LayoutDashboard, Settings, Users, FileText, HelpCircle, Building2 } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const dashboardItems = [
  {
    title: "Overview",
    href: "/dashboard",
    description: "View your dashboard overview and key metrics.",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    description: "Manage your users and their permissions.",
    icon: Users,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    description: "View and generate detailed reports.",
    icon: FileText,
  },
]

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to use our platform effectively.",
    icon: FileText,
  },
  {
    title: "Help Center",
    href: "/help",
    description: "Get help with any issues you encounter.",
    icon: HelpCircle,
  },
  {
    title: "API Reference",
    href: "/api",
    description: "Detailed documentation for our API endpoints.",
    icon: Settings,
  },
]

const company = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our company and mission.",
    icon: Building2,
  },
  {
    title: "Settings",
    href: "/settings",
    description: "Manage your account settings and preferences.",
    icon: Settings,
  },
]

export function StickyNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[#111111] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-white">
            <span className="text-xl font-bold">Dashboard</span>
          </Link>

          {/* Main Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-zinc-800">
                  Dashboard
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {dashboardItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-zinc-500">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-zinc-800">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {resources.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-zinc-500">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-zinc-800">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {company.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-zinc-500">{item.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-zinc-800 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-[#00A76F] text-white hover:bg-[#00965F]">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

