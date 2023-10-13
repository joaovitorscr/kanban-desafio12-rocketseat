type Props = {
  content: string
}

export default function Tag({ content }: Props) {
  return (
    <span className="px-2 py-1 bg-[#e2d6ff] rounded-lg mr-2">{content}</span>
  )
}
