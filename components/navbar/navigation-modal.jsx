"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // เอา Moon, Sun ออก
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const NavigationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ปิด modal เมื่อ route เปลี่ยน
  useEffect(() => setIsOpen(false), [pathname]);

  // ป้องกัน body scroll เมื่อ modal เปิด
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <>
      {/* Trigger Button */}
      <Button variant="outline" size="icon" className="rounded-full" onClick={() => setIsOpen(true)}>
        <Menu />
      </Button>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <motion.div
              className="absolute top-6 right-6 flex gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => setIsOpen(false)}>
                <X />
              </Button>
            </motion.div>

            {/* Navigation Menu */}
            <motion.nav
              className="flex flex-col items-center gap-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-medium hover:text-primary transition-colors duration-200 block py-2 px-4 rounded-lg hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
