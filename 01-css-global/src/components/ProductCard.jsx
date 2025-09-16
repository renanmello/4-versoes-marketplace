import React, {useState} from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({product}){
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  function addToCart(){
    setLoading(true);
    setTimeout(()=> setLoading(false), 900); // simula atraso
  }

  return (
    <article className="card" tabIndex="0" aria-labelledby={`p-${product.id}-title`}>
      <div className="card__media" aria-hidden>
        {!imgLoaded && <div style={{width:"100%",height:"100%"}}><Skeleton/></div>}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onLoad={()=>setImgLoaded(true)}
          style={{ display: imgLoaded ? "block" : "none" }}
        />
      </div>
      <div className="card__body">
        <div style={{display:"flex",justifyContent:"space-between", gap:8}}>
          <div>
            <div id={`p-${product.id}-title`} className="title">{product.title}</div>
            <div className="meta"><span className="price">R$ {product.price.toFixed(2)}</span>
              <span style={{marginLeft:8}} aria-label={`Avaliação ${product.rating}`}>{"★".repeat(Math.round(product.rating))}</span>
            </div>
          </div>
          {product.tag && <div className="tag" aria-hidden>{product.tag}</div>}
        </div>

        <div style={{marginTop:"auto", display:"flex", gap:8}}>
          <Button variant="ghost" onClick={()=>alert("Detalhes")} aria-label={`Detalhes de ${product.title}`}>Detalhes</Button>
          <Button variant="solid" onClick={addToCart} loading={loading} aria-label={`Adicionar ${product.title} ao carrinho`}>Adicionar</Button>
        </div>
      </div>
    </article>
  );
}
