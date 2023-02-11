
export const formatDateOrders = (date) => {
    let newDate = new Date(date);
      return newDate.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) + " " + newDate.toLocaleTimeString("es-ES", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      });

}

