const API_URL = "http://localhost:3001/articles";

export async function getArticles() {
    try {
        const response = await fetch("${API_URL}/${article.id}", {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
    });

        if (!response.ok) {
            throw new Error("Error al actualizar los artículos");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}