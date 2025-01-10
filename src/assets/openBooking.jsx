export default function openBooking() {
    if (window.WuBook) {
      window.WuBook.open({
        dfrom: "21/12/2021", // Fecha de llegada
        nights: 3, // Número de noches
      });
    } else {
      console.error("WuBook no está inicializado");
    }
  }
  