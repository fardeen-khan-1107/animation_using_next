import React from "react";
import styles from "../public/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Slideshow = () => {
  const images = [
    { src: "/assets/images/Image1.jpg", href: "/slide2" },
    { src: "/assets/images/Image2.jpg", href: "/slide2" },
    { src: "/assets/images/Image3.jpg", href: "/slide2" },
    { src: "/assets/images/Image4.jpg", href: "/slide2" },
    { src: "/assets/images/Image5.jpg", href: "/slide2" },
    { src: "/assets/images/Image7.jpg", href: "/slide2" },
    { src: "/assets/images/Image8.jpg", href: "/slide2" },
    { src: "/assets/images/Image7.jpg", href: "/slide2" },
    { src: "/assets/images/Image8.jpg", href: "/slide2" },
    { src: "/assets/images/Image8.jpg", href: "/slide2" },
  ];

  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{ "--quantity": images.length }}>
        {images.map((each, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ "--position": index + 1 }}
          >
            <Link href={each.href}>
              <Image
                src={each.src}
                alt={`Slide ${index + 1}`}
                width={200}
                height={230}
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
              <div className={styles.overlay}>
                <span>our service</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h1>SERVICES</h1>
      </div>
    </div>
  );
};

export default Slideshow;
