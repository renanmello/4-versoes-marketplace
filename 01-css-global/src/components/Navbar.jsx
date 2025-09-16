import React, { useEffect, useState } from "react";

function useTheme(){
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(()=>{ document.documentElement.setAttribute("data-theme", theme); localStorage.setItem("theme", theme); }, [theme]);
  return [theme, setTheme];
}

export default function Navbar(){
  const [theme, setTheme] = useTheme();
  const [cartCount, setCartCount] = useState(2);

  return (
    <header className="navbar" role="banner">
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <div aria-hidden style={{width:40,height:40,background:"var(--primary)",borderRadius:8}}></div>
        <div><strong>Minha Loja</strong></div>
      </div>

      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        <button aria-pressed={theme==="dark"} className="btn ghost" onClick={()=>setTheme(theme==="dark"?"light":"dark")} aria-label="Alternar tema">
          {theme==="dark" ? "🌙" : "☀️"}
        </button>

        <button className="btn outline" aria-label="Carrinho" aria-haspopup="dialog">
          Carrinho <span aria-hidden style={{marginLeft:8, background:"var(--accent)", padding:"2px 8px", borderRadius:999}}>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
