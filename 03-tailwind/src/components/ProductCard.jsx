import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ title, price, rating = 0, tag = "", image }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [adding, setAdding] = useState(false);

  function handleAdd() {
    setAdding(true);
    setTimeout(() => setAdding(false), 800); // simula delay
  }

  return (
    <article className="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 flex flex-col" tabIndex="0" aria-labelledby={`p-${title}`}>
      <div className="w-full">
        {!imgLoaded && <Skeleton variant="image" />}
        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`w-full ${imgLoaded ? "block" : "hidden"} object-cover aspect-square rounded-t-md`}
        />
      </div>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <div>
          <h3 id={`p-${title}`} className="text-sm font-semibold leading-tight line-clamp-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold">{price}</span>
            <span className="text-yellow-400" aria-label={`Avaliação ${rating}`}>{"★".repeat(Math.round(rating))}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <Button variant="ghost" onClick={() => alert(`Detalhes de ${title}`)}>Detalhes</Button>
          <Button variant="solid" onClick={handleAdd} loading={adding} aria-label={`Adicionar ${title} ao carrinho`}>Adicionar</Button>
        </div>
      </div>
    </article>
  );
}
