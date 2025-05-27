export const generarSlug = (nombre) => {
  return nombre
    .toLowerCase()
    .normalize("NFD") // Elimina acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-") // Espacios a guiones
    .replace(/[^a-z0-9\-]/g, "") // Quita todo lo que no sea alfanumérico o guión
    .trim();
};