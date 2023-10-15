import Tag from './Tag'

type Props = {
  title: string
  description: string
  tags: string[]
}

export default function Card({ title, description, tags }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-lg shadow-cardShadow p-6 mt-6">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <div>
        {tags.map((item) => (
          <Tag key={item} content={item} />
        ))}
      </div>
    </div>
  )
}
