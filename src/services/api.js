export async function getCategories() {
  const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
  const REQUEST = await fetch(ENDPOINT);
  const RESPONSE = await REQUEST.json();
  // Apague o console.log caso necessário. -Miguel
  console.log(RESPONSE);
  return RESPONSE;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {

}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
