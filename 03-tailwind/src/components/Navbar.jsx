import React, { useEffect, useState } from "react";

export default function Navbar({ initialCart = 3 }) {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [cartCount, setCartCount] = useState(initialCart);

  useEffect(() => {
    // aplica/remova a classe 'dark' no root (Tailwind dark:class)
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold" aria-hidden>
            M
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">Minha Loja</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            aria-label="Alternar tema"
            aria-pressed={dark}
            onClick={() => setDark(d => !d)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Carrinho */}
          <button
            type="button"
            aria-label={`Ver carrinho: ${cartCount} itens`}
            className="relative p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-gray-900"
            onClick={() => alert("Abrir carrinho (simulado)") }
          >
            🛒
            <span
              className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full"
              aria-hidden={false}
              aria-label={`${cartCount} itens no carrinho`}
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
