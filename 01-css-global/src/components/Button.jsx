import React from "react";

export default function Button({variant="solid", children, onClick, disabled=false, loading=false, ...rest}){
  const cls = `btn ${variant}`;
  return (
    <button
      className={cls}
      onClick={onClick}
      aria-disabled={disabled || loading}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}
