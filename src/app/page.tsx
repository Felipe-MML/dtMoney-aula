"use client"

import { BodyContainer } from "@/components/BodyContainer";
import { CardContainer } from "@/components/CardContainer";
import { Header } from "@/components/Header";
import Registry from "@/components/Registry";
import { Table } from "@/components/Table";

import { useState } from "react";

export default function Home() {

  const [isClicked, setIsClicked] = useState(false)

  const registry = [
    {id: "1",
    title: "Teste",
    price: 20,
    category: "Venda",
     date: "20/01/2025",
    type: 'exit'},

    {id: "2",
    title: "Teste",
    price: 20,
    category: "Venda",
     date: "20/01/2025",
    type: 'entry'}
  ]
  return (
    <div>
      <Header openClose={() => setIsClicked(!isClicked)}/>
      <BodyContainer>
        <CardContainer />
        <Table registrys={registry}/>
        {isClicked && <Registry openClose={() => setIsClicked(!isClicked)}/>}
      </BodyContainer>
    </div>
  );
}
