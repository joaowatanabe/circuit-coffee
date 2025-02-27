import api from "../services/api";

export async function createRequest(
  url: string,
  method: string,
  data?: object
) {
  try {
    const response = await api({
      url,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    alert("Erro ao fazer requisição");
    console.error(error);
  }
}
