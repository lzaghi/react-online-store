export async function getCategories() {
  const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
  const REQUEST = await fetch(ENDPOINT);
  const RESPONSE = await REQUEST.json();
  // Apague o console.log caso necessário. -Miguel
  console.log(RESPONSE);
  return RESPONSE;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const CATEGORY = categoryId;
  const SEARCH = query;
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?category=$${CATEGORY}&q=$${SEARCH}`;
  const REQUEST = await fetch(ENDPOINT);
  const RESPONSE = await REQUEST.json();
  // Apague o console.log caso necessário. -Miguel
  // A chave que contém resultado na busca é o .results -Miguel
  console.log(RESPONSE);
  return RESPONSE;
}

export async function getProductById(productId) {
  const ENDPOINT = `https://api.mercadolibre.com/items/${productId}`;
  const REQUEST = await fetch(ENDPOINT);
  const RESPONSE = await REQUEST.json();
  // Apague o console.log caso necessário. -Miguel
  console.log(RESPONSE);
  return RESPONSE;
}
