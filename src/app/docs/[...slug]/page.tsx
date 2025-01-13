export default async function Docs({ params }: { params: { slug: string[] }}) {
    const {slug} = await params;
  return <div>Docs: {slug.join('/')}</div>;
}
