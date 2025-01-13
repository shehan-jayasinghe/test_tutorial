export default async function ProductId({ params }: { params: { productId: string }}) {
  const productId = await Promise.resolve(params.productId);
  return <div>ProductId: {productId}</div>;
}
