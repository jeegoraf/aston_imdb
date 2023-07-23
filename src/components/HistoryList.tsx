import { useNavigate } from 'react-router-dom'

export function HistoryList(props: { data: [] }) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-3 pt-3 px-40">
      {props.data?.map((item) => {
        return (
          <button
            onClick={() => {
              navigate(item)
            }}
            className="bg-gray h-14 text-center align-center rounded-xl text-xl"
            key={item}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
