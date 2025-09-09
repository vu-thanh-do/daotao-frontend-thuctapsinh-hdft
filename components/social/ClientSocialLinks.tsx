// components/ClientSocialLinks.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientSocialLinks() {
    return (
        <div className="flex gap-4">
            {/* Nút Zalo */}
            <motion.a
                href="https://zalo.me/123456789"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
            >
                <Image
                    src="/zalo-icon.png"
                    alt="Zalo"
                    width={20}
                    height={20}
                />
                Zalo
            </motion.a>

            {/* Nút Facebook */}
            <motion.a
                href="https://facebook.com/hdfuturetech"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
            >
                <Image
                    src="/facebook-icon.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                />
                Facebook
            </motion.a>
        </div>
    );
}
