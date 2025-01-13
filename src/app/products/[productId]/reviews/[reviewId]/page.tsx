export default  async function ReviewId({ params }: { params: { reviewId: string, productId: string }}) {
    const {reviewId, productId} =  await params;
  return <div>ReviewId: {reviewId} ProductId: {productId}</div>;
}
