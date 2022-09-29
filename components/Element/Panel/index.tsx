
interface PanelProps {
  text: string
}



export default function Panel(props: PanelProps) {
  return (
    <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8 mt-2">
      <div className="col-start-2 col-span-10">
        <div className="overflow-hidden rounded-lg bg-blue-grey-50 shadow">
          <div className="px-4 py-5 sm:p-6 text-blue-grey-700">{props.text}</div>
        </div>
      </div>
    </div>
  )
}