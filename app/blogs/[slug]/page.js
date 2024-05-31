export default function Page({ params }) {
  return <div className="px-[1.5rem] xl:px-[5rem]">My Post: {params.slug}</div>
}