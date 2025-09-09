"use client";
import { motion } from "framer-motion";
import styles from "./SocialLinks.module.css";
import Image from "next/image";


export default function SocialLinks() {
    return (
        <div className={styles.floatingButtons}>
            <motion.a
                href="tel:0566730000"
                className={`${styles.btnFloat} ${styles.btnPhone}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                aria-label="Gọi điện thoại"
            >
                <Image
                    src="/imageSDT.png"
                    className={styles.btnIcon}
                    alt="Phone"
                    width={35}
                    height={35}
                    priority
                />
            </motion.a>

            <>
                <motion.a
                    href="https://zalo.me/0566730000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.btnFloat} ${styles.btnZalo}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Chat Zalo"
                >
                    <Image
                        src="/imageZalo.png"
                        className={styles.btnIcon}
                        alt="Zalo"
                        width={35}
                        height={35}
                        priority
                    />
                </motion.a>
                <motion.a
                    href="https://www.facebook.com/hdcodelap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.btnFloat} ${styles.btnFB}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Chat Facebook"
                >
                    <Image
                        src="/iconFacebook.png"
                        className={styles.btnIcon}
                        alt="Facebook"
                        width={35}
                        height={35}
                        priority
                    />
                </motion.a>
            </>
        </div>
    );
}
