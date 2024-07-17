"use-client"
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import styles from "@/styles/styles.css";
import Header from "@/Components/Header";
import TODOHero from "@/Components/TODOHero";
import Form from "@/Components/Form";
import TODOList from "@/Components/TODOList";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState([
  ])
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={todos.length} />
      <Form setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}
