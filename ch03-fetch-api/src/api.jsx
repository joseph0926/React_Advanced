const baseUrl = "https://api.unsplash.com/search/photos";

const searchImages = async (searchTerm) => {
  const response = await fetch(`${baseUrl}?${searchTerm}`, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API}`,
    },
  });
  console.log(response);
  if (!response.ok) {
    const error = new Error("서버로부터 응답이 없습니다.");
    error.status = 500;
    throw error;
  }
  console.log(response);
  return response.data.result;
};

export default searchImages;
