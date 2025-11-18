import { PORT } from "../../Backend/Keys/keys.js";

const RegisterSale = async (amount, idCustomer) => {
  try {
    const response = await fetch(`http://localhost:${PORT}/api/sales`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ amount: parseFloat(amount), id_customer: idCustomer })
    });
    if (!response.ok) throw new Error("Error al registrar la venta");

    return await response.json();

  } catch (error) {
    throw error;
  }
};

export default RegisterSale;