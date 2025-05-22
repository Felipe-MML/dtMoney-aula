export interface IRegistry {
    id: string;
    title: string;
    price: number;
    category: string;
     date: string;
    type: string;
}

export interface ITableProps {
  registrys: IRegistry[];
}

export const Table = ({ registrys }: ITableProps) => {
  const reverseTable = [...registrys].reverse();
  return (
    <div className="flex flex-col max-w-[1120px] mx-auto mt-10">
  <div className="grid grid-cols-4 p-4 text-[#969cb3] font-medium rounded mb-2">
    <div className="pr-[13rem] w-[10em]">Título</div>
    <div className="pl-4 justify-self-end w-[10rem]">Preço</div>
    <div className="pl-4 justify-self-end w-[10rem]">Categoria</div>
    <div className="pl-4 justify-self-end w-[10rem]">Data</div>
  </div>

  {reverseTable.length === 0 && (
    <h1 className="self-center">Tabela vazia</h1>
  )}

  {reverseTable.map((registry) => (
    <div key={registry.id} className="grid grid-cols-4 p-4 bg-white rounded mb-2 items-center">
      <div className="pr-[13rem] w-[10em]">{registry.title}</div>
      {registry.type === "exit" ? (
        <div className="pl-4 justify-self-end w-[10rem] text-[#e83f5b] font-bold">
          -R$ {registry.price}
        </div>
      ) : (
        <div className="pl-4 justify-self-end w-[10rem] text-[#12a454] font-bold">
          R$ {registry.price}
        </div>
      )}
      <div className="pl-4 justify-self-end w-[10rem]">{registry.category}</div>
      <div className="pl-4 justify-self-end w-[10rem]">{registry.date}</div>
    </div>
  ))}
</div>

  );
};


