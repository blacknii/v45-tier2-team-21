"use client";
import styles from "./page.module.css";
import { Icon } from "@iconify/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/main-content/MainContent";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        backgroundColor: "gray",
      }}
    >
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
